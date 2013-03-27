using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using CIAPI.Portable.Model;
using Newtonsoft.Json;
using Salient.Portable.HttpArchiveFormat;
using Salient.Portable.ReliableHttpClient;

namespace CIAPI.Portable.Rpc 
{
    public partial class Client : ClientBase
    {
        public string ApiBaseUrl { get; set; }
        public string Username { get; set; }
        public string SessionId { get; set; }
        public AccountInformationResponseDTO CurrentAccountInformation { get; set; }

        public override Task<Entry> EnqueueRequestAsync(Entry entry)
        {

            if (entry.Request.Headers == null)
            {
                entry.Request.Headers = new Headers();
            }

            if (!string.IsNullOrEmpty(Username))
            {

                entry.Request.Headers.Add(new NameValuePair("UserName", Username));
            }

            if (!string.IsNullOrEmpty(SessionId))
            {
                entry.Request.Headers.Add(new NameValuePair("Session", SessionId));
            }

            return base.EnqueueRequestAsync(entry);

             
        }

 

 
    }
}

