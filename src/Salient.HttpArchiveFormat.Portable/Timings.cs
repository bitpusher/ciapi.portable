using System;
using System.Runtime.Serialization;

namespace Salient.Portable.HttpArchiveFormat
{
    /// <summary>
    /// This object describes various phases within request-response round trip. 
    /// All times are specified in milliseconds.
    /// </summary>
     [DataContract]
    public partial class Timings
    {
        /// <summary>
        /// 
        /// </summary>
        public Timings()
        {
            Blocked = -1;
            Dns = -1;
            Connect = -1;
            Ssl = -1;
        }

        /// <summary>
        /// blocked [number, optional]
        /// Time spent in a queue waiting for a network connection. Use -1 if the 
        /// timing does not apply to the current request.
        /// </summary>
        [DataMember(Name = "blocked")]
        public int Blocked { get; set; }

        /// <summary>
        /// dns [number, optional]
        /// DNS resolution time. The time required to resolve a host name. Use -1 if the 
        /// timing does not apply to the current request.
        /// </summary>
        [DataMember(Name = "dns")]
        public int Dns { get; set; }

        /// <summary>
        /// connect [number, optional]
        /// Time required to create TCP connection. Use -1 if the timing does not apply to 
        /// the current request.
        /// </summary>
        [DataMember(Name = "connect")]
        public int Connect { get; set; }

        /// <summary>
        /// send [number]
        /// Time required to send HTTP request to the server.
        /// </summary>
        [DataMember(Name = "send")]
        public int Send { get; set; }

        /// <summary>
        /// wait [number]
        /// Waiting for a response from the server.
        /// </summary>
        [DataMember(Name = "wait")]
        public int Wait { get; set; }

        /// <summary>
        /// receive [number]
        /// Time required to read entire response from the server (or cache).
        /// </summary>
        [DataMember(Name = "receive")]
        public int Receive { get; set; }


        /// <summary>
        /// ssl [number, optional] (new in 1.2)
        /// Time required for SSL/TLS negotiation. If this field is defined then the time is 
        /// also included in the connect field (to ensure backward compatibility with HAR 1.1). 
        /// Use -1 if the timing does not apply to the current request.
        /// </summary>
        [DataMember(Name = "ssl")]
        public int Ssl { get; set; }

        /// <summary>
        /// comment [string, optional] (new in 1.2)
        /// A comment provided by the user or the application.
        /// </summary>
        [DataMember(Name = "comment")]
        public string Comment { get; set; }
    }
}