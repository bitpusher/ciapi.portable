using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Salient.Portable.HttpArchiveFormat
{
    /// <summary>
    /// This object contains detailed info about performed request.
    /// </summary>
    [DataContract]
    public partial class Request
    {
        /// <summary>
        /// 
        /// </summary>
        public Request()
            : this(null, null)
        {


        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="url"></param>
        /// <param name="method"></param>
        public Request(string url, string method)
        {
            HeadersSize = -1;
            BodySize = -1;
            Url = url;
            Method = method;
        }

        /// <summary>
        /// method [string]
        /// Request method (GET, POST, ...).
        /// </summary>
        [DataMember(Name = "method")]
        public string Method { get; set; }

        /// <summary>
        /// url [string]
        /// Absolute URL of the request (fragments are not included).
        /// </summary>
        [DataMember(Name = "url")]
        public string Url { get; set; }

        /// <summary>
        /// httpVersion [string]
        /// Request HTTP Version.
        /// </summary>
        [DataMember(Name = "httpVersion")]
        public string HttpVersion { get; set; }

        /// <summary>
        /// cookies [array]
        /// List of cookie objects.
        /// </summary>
        [DataMember(Name = "cookies")]
        public Cookies Cookies { get; set; }

        /// <summary>
        /// headers [array]
        /// List of header objects.
        /// </summary>
        [DataMember(Name = "headers")]
        public Headers Headers { get; set; }

        /// <summary>
        /// queryString [array]
        /// List of query parameter objects.
        /// </summary>
        [DataMember(Name = "queryString")]
        public QueryString QueryString { get; set; }

        /// <summary>
        /// postData [object, optional]
        /// Posted data info.
        /// </summary>
        [DataMember(Name = "postData")]
        public PostData PostData { get; set; }

        /// <summary>
        /// headersSize [number]
        /// Total number of bytes from the start of the HTTP request message until 
        /// (and including) the double CRLF before the body. 
        /// Set to -1 if the info is not available.
        /// </summary>
        [DataMember(Name = "headersSize")]
        public int HeadersSize { get; set; }

        /// <summary>
        /// bodySize [number]
        /// Size of the request body (POST data payload) in bytes. 
        /// Set to -1 if the info is not available.
        /// </summary>
        [DataMember(Name = "bodySize")]
        public int BodySize { get; set; }

        /// <summary>
        /// comment [string, optional] (new in 1.2)
        /// A comment provided by the user or the application.
        /// </summary>
        [DataMember(Name = "comment")]
        public string Comment { get; set; }
    }
}