using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Salient.Portable.HttpArchiveFormat
{
    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public class Headers : List<NameValuePair>
    {
        /// <summary>
        /// 
        /// </summary>
        public Headers()
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="headers"></param>
        public Headers(params NameValuePair[] headers)
        {
            foreach (NameValuePair header in headers)
            {
                Add(header);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="headers"></param>
        public Headers(IEnumerable<NameValuePair> headers)
        {
            foreach (NameValuePair header in headers)
            {
                Add(header);
            }
        }
    }
}