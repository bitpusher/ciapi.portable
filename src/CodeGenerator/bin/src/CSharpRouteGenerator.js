(function () {

    var generator = exports.CSharpRouteGenerator = function (smd, schema, namespaceName, className, imports, routesPatch) {
        this.smd = smd;
        this.schema = schema;
        this._lines = [];
        this.routesPatch = routesPatch;

        this.className = className;
        this.namespaceName = namespaceName;
        this.imports = imports ? imports : [];

    };

    generator.prototype = {
        normalizeKey: function (key) {
            if (key.indexOf("#.") > -1 || key.indexOf("#/") > -1) {
                key = key.substring(2);
            };
            return key;
        },

        writeLine: function (value) {
            this._lines.push(value);
        },
        toString: function () {
            return this._lines.join("\n");
        },

        createSummary: function (description) {
            var result = "";
            result = result.concat("\n" + "        /// <summary>");
            result = result.concat("\n" + "        /// " + this.createDescription(description));
            result = result.concat("\n" + "        /// </summary>");
            return result;
        },
        createDescription: function (description) {

            return description ? description.replace(/[\r\n]/g, "") : " [DESCRIPTION MISSING]";

        },
        generate: function () {
            var subClasses = {
                "default": ""
            };
            this.target = this.smd.target;
            var self = this;

            var services = this.smd.services;
            var schema = this.schema;
            if (this.imports) {
                each(this.imports, function (namespaceName) {
                    self.writeLine("using " + namespaceName + ";");
                });

            }
            self.writeLine("namespace " + this.namespaceName);
            self.writeLine("{");
            self.writeLine(self.createSummary(""));
            
            self.writeLine("    public partial class " + this.className);
            self.writeLine("    {");
            each(services, function (service, key) {
                var serviceText = "";
                serviceText = serviceText.concat("\n" + "        // ***********************************");
                serviceText = serviceText.concat("\n" + "        // " + key);
                serviceText = serviceText.concat("\n" + "        // ***********************************");
                serviceText = serviceText.concat("\n" + "");


                serviceText = serviceText.concat("\n" + self.createSummary(service.description));
                each(service.parameters, function (parameter) {
                    serviceText = serviceText.concat("\n" + "        /// <param name=\"" + parameter.name + "\">" + self.createDescription(parameter.description) + "</param>");

                });






                var paramList = "";
                var firstParam = true;
                var inputDtoType = null;
                var inputDtoName = null;
                each(service.parameters, function (parameter) {
                    var paramType;
                    if (parameter.type) {
                        paramType = self.resolveType(parameter.type);
                    }
                    else if (parameter.$ref) {

                        paramType = self.normalizeKey(parameter.$ref);
                        inputDtoType = paramType;
                        inputDtoName = parameter.name;
                    } else {
                        throw new Error("unsupported property type");

                    }


                    if (!firstParam) {


                        paramList = paramList.concat(", ");

                    }

                    firstParam = false;
                    paramList = paramList.concat(paramType, " ", parameter.name);
                });



                var returnType;

                if (service.returns) {
                    if (service.returns.type) {
                        // is a primitive type
                        returnType = self.resolveType(service.returns.type);
                    }
                    else {
                        // is a reference type
                        returnType = self.resolveType(service.returns);
                    }
                } else {
                    // C# client needs a dummy type for void returns
                    returnType = "NullType";
                }


                var target = service.target;
                var uriTemplate = service.uriTemplate;
                var transport = service.transport.toUpperCase();


                var requestParamList = "";
                var firstRequestParam = true;
                each(service.parameters, function (parameter) {
                    if (!parameter.$ref) {
                        // object params are for post only. these are for querystring
                        if (!firstRequestParam) {
                            requestParamList = requestParamList.concat(", ");
                        }

                        firstRequestParam = false;
                        //new NameValuePair("UserName", Username)
                        requestParamList = requestParamList.concat("new NameValuePair(\"" + parameter.name + "\", " + parameter.name + ")");
                    }

                });
                var visibility = "public";
                var subClassName = "default";

                if (self.routesPatch) {
                    if (self.routesPatch[key]) {

                        if (self.routesPatch[key].visibility) {
                            visibility = self.routesPatch[key].visibility;
                        }

                        if (self.routesPatch[key].section) {
                            subClassName = self.routesPatch[key].section;

                        }
                    }
                }


                if (!subClasses[subClassName]) {
                    subClasses[subClassName] = "";
                }




                serviceText = serviceText.concat("\n" + "        " + visibility + " virtual Task<" + returnType + "> " + key + "Async(" + paramList + ")");
                serviceText = serviceText.concat("\n" + "        {");

                serviceText = serviceText.concat("\n" + '            var entry = new Entry');
                serviceText = serviceText.concat("\n" + '            {');
                serviceText = serviceText.concat("\n" + '                Request = new Request');
                serviceText = serviceText.concat("\n" + '                {');
                serviceText = serviceText.concat("\n" + '                    Method = "' + transport + '",');
                serviceText = serviceText.concat("\n" + '                    Url = _client.ApiBaseUrl + "/' + target + uriTemplate + '"');
                if (transport == "POST") {
                    serviceText = serviceText.concat(",");

                    serviceText = serviceText.concat("\n" + '                    PostData = new PostData{');
                    serviceText = serviceText.concat("\n" + '                       MimeType = "application/json",');
                    serviceText = serviceText.concat("\n" + '                       Params = new Parameters(' + ((inputDtoName) ? 'new NameValuePair("", ' + inputDtoName + ')' : '') + ')');
                    serviceText = serviceText.concat("\n                    }");
                }
                if (requestParamList) {
                    serviceText = serviceText.concat(",");

                    serviceText = serviceText.concat("\n" + '                    QueryString = new QueryString(' + requestParamList + ')');

                }


                serviceText = serviceText.concat("\n" + '                }');
                serviceText = serviceText.concat("\n" + '            };');
                serviceText = serviceText.concat("\n" + '');
                serviceText = serviceText.concat("\n" + '');
                serviceText = serviceText.concat("\n" + '            Task<Entry> getResponseTextTask = _client.EnqueueRequestAsync(entry);');
                serviceText = serviceText.concat("\n" + '');
                serviceText = serviceText.concat("\n" + '            Task<' + returnType + '> deserializeTask =');
                serviceText = serviceText.concat("\n" + '                getResponseTextTask.ContinueWith(task =>');
                serviceText = serviceText.concat("\n" + '                {');
                serviceText = serviceText.concat("\n" + '                    var data =');
                serviceText = serviceText.concat("\n" + '                        JsonConvert.DeserializeObject<' + returnType + '>(task.Result.Response.Content.Text);');
                serviceText = serviceText.concat("\n" + '                    return data;');
                serviceText = serviceText.concat("\n" + '                });');
                serviceText = serviceText.concat("\n" + '');
                serviceText = serviceText.concat("\n" + '            return deserializeTask.ContinueWith(task => task.Result);');



 
                serviceText = serviceText.concat("\n" + "        }");
                serviceText = serviceText.concat("\n" + "");



                subClasses[subClassName] = subClasses[subClassName].concat(serviceText, "\n");


            });

            // #TODO: need to emit default constructor that instantiates subclasses and accessors
            var subClassProperties = "";
            var subClassDefinitions = "";
            var subClassInitializer = "";


            each(subClasses, function (subClass, key) {

                if (key != "default") {
                    subClassProperties = subClassProperties.concat("\n" + self.createSummary(""));
                    subClassProperties = subClassProperties.concat("\n      public _" + key + " " + key + "{get; private set;}");
                    subClassInitializer = subClassInitializer.concat("\n            this. " + key + " = new _" + key + "(this);");
                }



            });

            self.writeLine(subClassProperties);

            // to support smd methods that do not have a 'section' in meta or patch
            self.writeLine("        private Client _client;");
            self.writeLine("        public string AppKey { get; set; }");

            self.writeLine("        public Client(string rpcUri, string appKey)");
            self.writeLine("        {");
            self.writeLine("        AppKey=appKey;");
            self.writeLine("        _client=this;");
            self.writeLine("        ApiBaseUrl = rpcUri;");

            self.writeLine(subClassInitializer);

            self.writeLine("        }");





            each(subClasses, function (subClass, key) {
                if (key != "default") {
                    self.writeLine("        public class _" + key);
                    self.writeLine("        {");
                    self.writeLine("            private " + self.className + " _client;");
                    self.writeLine("            public _" + key + "(" + self.className + " client){ this._client = client;}");
                }

                self.writeLine(subClass);

                if (key != "default") {
                    self.writeLine("        }            ");
                }

            });

            self.writeLine("    }");
            self.writeLine("}");

            return this.toString();
        },
        resolveType: function (type) {

            var resolvedType;

            // does not handle arrays and does not handle nullable - neither of which is unreasonable given the nature
            // of the api
            var self = this;


            if (type.$ref) {

                resolvedType = this.normalizeKey(type.$ref);



            } else {

                resolvedType = this.applyFormat(type);
            }

            return resolvedType;

        },
        applyFormat: function (type) {
            var resolvedType = type;
            switch (type) {
                case "string":
                    // new formats "wcf-date"
                    if (type.format == "wcf-date") {
                        resolvedType = "DateTime";
                    }
                    else {
                        resolvedType = "string";
                    }
                    break;
                case "number":
                    // new formats "decimal[-precision?]"
                    if (type.format == "decimal") {
                        resolvedType = "decimal";
                    }
                    else {
                        resolvedType = "float";
                    }
                    break;
                case "integer":
                    resolvedType = "int";
                    break;
                case "boolean":
                    resolvedType = "bool";
                    break;
                case "object":
                    break;

                case "null":
                    break;
                case "any":
                    break;
                default:
                    break;
            }
            return resolvedType;
        }


    };








    // private lib funcs

    function isArray(obj) {
        return (obj && (typeof (obj) == "object") && obj.length);
    };

    function isDefined(obj) {
        return obj && (typeof (obj) != 'undefined');
    };

    function each(obj, action) {
        var self = this;
        if (isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
                action.call(self, obj[i], i, obj);
            }
        }
        else if (typeof (obj) == "object") {
            for (var name in obj) {
                if (obj.hasOwnProperty(name)) {
                    action.call(self, obj[name], name, obj);
                };
            };
        }
        else {
            throw new Error("cannot iterate supplied obj");
        };
    };
})();





