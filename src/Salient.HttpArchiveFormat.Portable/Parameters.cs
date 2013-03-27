using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Salient.Portable.HttpArchiveFormat
{
    [DataContract]
    public class Parameters : List<NameValuePair>
    {
        public Parameters()
        {
        }

        public Parameters(params NameValuePair[] parameters)
        {
            foreach (NameValuePair parameter in parameters)
            {
                Add(parameter);
            }
        }

        public Parameters(IEnumerable<NameValuePair> parameters)
        {
            foreach (NameValuePair parameter in parameters)
            {
                Add(parameter);
            }
        }
    }
}