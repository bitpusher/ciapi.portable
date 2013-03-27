using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Salient.Portable.HttpArchiveFormat
{
    [DataContract]
    public class Headers : List<NameValuePair>
    {
        public Headers()
        {
        }

        public Headers(params NameValuePair[] headers)
        {
            foreach (NameValuePair header in headers)
            {
                Add(header);
            }
        }

        public Headers(IEnumerable<NameValuePair> headers)
        {
            foreach (NameValuePair header in headers)
            {
                Add(header);
            }
        }
    }
}