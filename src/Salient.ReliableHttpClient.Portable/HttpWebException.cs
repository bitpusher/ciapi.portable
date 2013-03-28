using System;


namespace Salient.Portable.ReliableHttpClient
{
    /// <summary>
    /// 
    /// </summary>
    public class HttpWebException : Exception
    {
        /// <summary>
        /// 
        /// </summary>
        public string ResponseText { get; set; }
    }
}