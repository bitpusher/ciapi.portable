using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Salient.Portable.HttpArchiveFormat
{
    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public class QueryString : List<NameValuePair>
    {
        /// <summary>
        /// 
        /// </summary>
        public QueryString()
        {
            
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="items"></param>
        public QueryString(params NameValuePair[] items)
        {
            foreach (var nameValuePair in items)
            {
                Add(nameValuePair);
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="items"></param>
        public QueryString(IEnumerable<NameValuePair> items)
        {
            foreach (var nameValuePair in items)
            {
                Add(nameValuePair);
            }
        }
    }
}