using System;
using System.Runtime.Serialization;

namespace Salient.Portable.HttpArchiveFormat
{
    /// <summary>
    /// An exported page
    /// </summary>
    [DataContract]
    public partial class Page
    {
        public Page()
        {
       
        }

        // TODO: helper method to convert to ISO 8601
        /// <summary>
        /// startedDateTime [string]
        /// Date and time stamp for the beginning of the page load 
        /// (ISO 8601 - YYYY-MM-DDThh:mm:ss.sTZD, e.g. 2009-07-24T19:20:30.45+01:00).
        /// </summary>
        [DataMember(Name = "startedDateTime")]
        public string StartedDateTime { get; set; }

        /// <summary>
        /// id [string] 
        /// Unique identifier of a page within the . Entries use it to refer the parent page.
        /// </summary>
        [DataMember(Name = "id")]
        public string Id { get; set; }

        /// <summary>
        /// title [string]
        /// Page title.
        /// </summary>
        [DataMember(Name = "title")]
        public string Title { get; set; }

        /// <summary>
        /// pageTimings[object]
        /// Detailed timing info about page load.
        /// </summary>
        [DataMember(Name = "pageTimings")]
        public PageTimings PageTimings { get; set; }

        /// <summary>
        /// comment [string, optional] (new in 1.2)
        /// A comment provided by the user or the application.
        /// </summary>
        [DataMember(Name = "comment")]
        public string Comment { get; set; }
    }
}