using System;
using System.IO;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Salient.Portable.HttpArchiveFormat;

namespace Salient.Portable.ReliableHttpClient
{
    /// <summary>
    /// 
    /// </summary>
    public static class Helper
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="entry"></param>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static T CloneObject<T>(Entry entry) where T : class, new()
        {
            // the simplest way i can see to get a true deep copy in this framework profile is to
            // brute force it with json serialization.

            string t = JsonConvert.SerializeObject(entry);
            var r = JsonConvert.DeserializeObject<T>(t);
            return r;
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="entry"></param>
        public static void PrepareEntryRequest(Entry entry)
        {
            // url is modified using the {xx} matching strategy

            QueryString queryString = entry.Request.QueryString;

            if (queryString != null)
            {
                foreach (NameValuePair variable in entry.Request.QueryString)
                {
                    string replacement = Uri.EscapeUriString(variable.Value.ToString());

                    const RegexOptions regexOptions = RegexOptions.IgnoreCase;

                    entry.Request.Url = Regex.Replace(entry.Request.Url, "\\{" + variable.Name + "\\}", replacement,
                                                      regexOptions);
                }
            }


            PostData postData = entry.Request.PostData;
            if (postData != null)
            {
                // only build postdata if it is empty. e.g. do not overwrite existing value
                if (string.IsNullOrEmpty(postData.Text) && postData.Params != null)
                {
                    foreach (NameValuePair parameter in postData.Params)
                    {
                        if (!string.IsNullOrEmpty(postData.Text))
                        {
                            postData.Text = string.Concat(postData.Text, "&");
                        }

                        string paramName = parameter.Name;
                        // TODO: look at mimetype to determine how to handle?

                        string paramValue;
                        switch ((postData.MimeType ?? "").ToLower())
                        {
                            case "application/json":
                                paramValue = JsonConvert.SerializeObject(parameter.Value, Formatting.Indented);
                                break;
                            default:
                                paramValue = Uri.EscapeUriString(parameter.Value.ToString());
                                break;
                        }

                        // param with empty name is naked
                        string paramTemplate = string.IsNullOrEmpty(paramName) ? "{1}" : "{0}={1}";
                        postData.Text = string.Concat(postData.Text, string.Format(paramTemplate, paramName, paramValue));
                    }
                }
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="stream"></param>
        /// <returns></returns>
        public static byte[] ReadStreamFully(Stream stream)
        {
            var buffer = new byte[32768];
            using (var ms = new MemoryStream())
            {
                while (true)
                {
                    int read = stream.Read(buffer, 0, buffer.Length);
                    if (read <= 0)
                    {
                        return ms.ToArray();
                    }
                    ms.Write(buffer, 0, read);
                }
            }
        }
    }
}