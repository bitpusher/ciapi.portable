using System.Threading.Tasks;
using CIAPI.Portable.Model;
using Salient.Portable.HttpArchiveFormat;
using Salient.Portable.ReliableHttpClient;

namespace CIAPI.Portable.Rpc 
{
    public partial class Client : ClientBase
    {
        /// <summary>
        /// 
        /// </summary>
        public string ApiBaseUrl { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Username { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string SessionId { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public AccountInformationResponseDTO CurrentAccountInformation { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="entry"></param>
        /// <returns></returns>
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

