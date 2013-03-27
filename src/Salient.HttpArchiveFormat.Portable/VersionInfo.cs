using System;
using System.Runtime.Serialization;

namespace Salient.Portable.HttpArchiveFormat
{
    /// <summary>
    /// Name and version info of used browser.
    /// </summary>
    [DataContract]
    public partial class VersionInfo
    {
        /// <summary>
        /// name [string] 
        /// Name of the browser used to export the log.
        /// </summary>
        [DataMember(Name = "name")]
        public string Name { get; set; }

        /// <summary>
        /// version [string] 
        /// Version of the browser used to export the log.
        /// </summary>
        [DataMember(Name = "version")]
        public string Version { get; set; }

        /// <summary>
        /// comment [string, optional] (new in 1.2)
        /// A comment provided by the user or the application.
        /// </summary>
        [DataMember(Name = "comment")]
        public string Comment { get; set; }
    }
}