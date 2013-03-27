using System;
using System.Runtime.Serialization;

namespace Salient.Portable.HttpArchiveFormat
{
    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public partial class NameValuePair
    {
        /// <summary>
        /// 
        /// </summary>
        public NameValuePair()
        {
            
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="name"></param>
        /// <param name="value"></param>
        /// <param name="comment"></param>
        public NameValuePair(string name, object value, string comment = null)
        {
            Name = name;
            Value = value;
            Comment = comment;
        }

        /// <summary>
        /// 
        /// </summary>
        [DataMember(Name = "name")]
        public string Name { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [DataMember(Name = "value")]
        public object Value { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [DataMember(Name = "comment")]
        public string Comment { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            return string.Format("[{0},{1}] {2}", Name, Value, Comment);
        }
    }
}