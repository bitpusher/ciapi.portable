using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Salient.Portable.HttpArchiveFormat
{
    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public class Parameters : List<NameValuePair>
    {
        /// <summary>
        /// 
        /// </summary>
        public Parameters()
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="parameters"></param>
        public Parameters(params NameValuePair[] parameters)
        {
            foreach (NameValuePair parameter in parameters)
            {
                Add(parameter);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="parameters"></param>
        public Parameters(IEnumerable<NameValuePair> parameters)
        {
            foreach (NameValuePair parameter in parameters)
            {
                Add(parameter);
            }
        }
    }
}