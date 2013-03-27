using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Salient.Portable.HttpArchiveFormat
{
    [DataContract]
    public class QueryString : List<NameValuePair>
    {
        public QueryString()
        {
            
        }
        public QueryString(params NameValuePair[] items)
        {
            foreach (var nameValuePair in items)
            {
                Add(nameValuePair);
            }
        }
        public QueryString(IEnumerable<NameValuePair> items)
        {
            foreach (var nameValuePair in items)
            {
                Add(nameValuePair);
            }
        }
    }
}