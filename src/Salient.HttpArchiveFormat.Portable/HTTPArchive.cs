using System;
using System.Globalization;
using System.Runtime.Serialization;

namespace Salient.Portable.HttpArchiveFormat
{
    /// <summary>
    /// A POCO implementation of the HTTP Archive specification v 1.2
    /// http://www.softwareishard.com/blog/har-12-spec/
    /// 
    /// NOTE: property names are intentionally camel-cased to provide
    /// spec compliant round trip JSON serialization.
    /// 
    /// </summary>
    [DataContract]
    public partial class HTTPArchive
    {
        public HTTPArchive()
        {
            Log = new Log();
        }

        /// <summary>
        /// This object represents the root of exported data.
        /// </summary>
        [DataMember(Name = "log")]
        public Log Log { get; set; }


        [Obsolete("these are what i found with a quick search. not convinced")]
        public static DateTime FromISO8601(string date)
        {
            return DateTime.Parse(date, null, DateTimeStyles.RoundtripKind);

        }
        [Obsolete("these are what i found with a quick search. not convinced")]
        public static string ToISO8601(DateTime date)
        {
            return date.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz");
        }
    }
}