using System;
using System.Runtime.Serialization;

namespace Salient.Portable.HttpArchiveFormat
{
    /// <summary>
    /// This object describes timings for various events (states) fired during the page load.
    /// All times are specified in milliseconds. If a time info is not available appropriate 
    /// field is set to -1.
    /// </summary>
    [DataContract]
    public partial class PageTimings
    {
        /// <summary>
        /// 
        /// </summary>
        public PageTimings()
        {
            OnContentLoad = -1;
            OnLoad = -1;
        }

        /// <summary>
        /// onContentLoad [number, optional]
        /// Content of the page loaded. Number of milliseconds since page load started 
        /// (page.startedDateTime). Use -1 if the timing does not apply to the current request.
        /// </summary>
        [DataMember(Name = "onContentLoad")]
        public int OnContentLoad { get; set; }

        /// <summary>
        /// onLoad [number,optional]
        /// Page is loaded (onLoad event fired). Number of milliseconds since page load started 
        /// (page.startedDateTime). Use -1 if the timing does not apply to the current request.
        /// </summary>
        [DataMember(Name = "onLoad")]
        public int OnLoad { get; set; }

        /// <summary>
        /// comment [string, optional] (new in 1.2)
        /// A comment provided by the user or the application.
        /// </summary>
        [DataMember(Name = "comment")]
        public string Comment { get; set; }
    }
}