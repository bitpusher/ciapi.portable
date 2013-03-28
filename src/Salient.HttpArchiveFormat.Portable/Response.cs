using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Salient.Portable.HttpArchiveFormat
{
    /// <summary>
    /// This object contains detailed info about the response.
    /// </summary>
    [DataContract]
    public partial class Response
    {
        /// <summary>
        /// 
        /// </summary>
        public Response()
        {
 
            HeadersSize = -1;
            BodySize = -1;
        }

        /// <summary>
        /// status [number]
        /// Response status.
        /// </summary>
        [DataMember(Name = "status")]
        public int Status { get; set; }

        /// <summary>
        /// statusText [string]
        /// Response status description.
        /// </summary>
        [DataMember(Name = "statusText")]
        public string StatusText { get; set; }

        /// <summary>
        /// httpVersion [string]
        /// Response HTTP Version.
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
        /// content [object]
        /// Details about the response body.
        /// </summary>
        [DataMember(Name = "content")]
        public Content Content { get; set; }

        /// <summary>
        /// redirectURL [string]
        /// Redirection target URL from the Location response header.
        /// </summary>
        [DataMember(Name = "redirectURL")]
        public string RedirectUrl { get; set; }

        /// <summary>
        /// headersSize [number]
        /// Total number of bytes from the start of the HTTP response message until 
        /// (and including) the double CRLF before the body. 
        /// Set to -1 if the info is not available.
        /// 
        /// The size of received response-headers is computed only from headers that are 
        /// really received from the server. Additional headers appended by the browser are 
        /// not included in this number, but they appear in the list of header objects.
        /// </summary>
        [DataMember(Name = "headersSize")]
        public int HeadersSize { get; set; }

        /// <summary>
        /// bodySize [number]
        /// Size of the received response body in bytes.
        /// Set to zero in case of responses coming from the cache (304). 
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