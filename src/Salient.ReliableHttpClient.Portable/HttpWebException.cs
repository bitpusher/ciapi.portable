using System;


namespace Salient.Portable.ReliableHttpClient
{
    public class HttpWebException : Exception
    {
        public string ResponseText { get; set; }
    }
}