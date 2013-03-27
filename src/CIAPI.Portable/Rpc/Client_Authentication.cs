using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CIAPI.Portable.Model;
using Newtonsoft.Json;
using Salient.Portable.HttpArchiveFormat;

namespace CIAPI.Portable.Rpc
{
    public partial class Client
    {
        public Task<ApiLogOnResponseDTO> LoginAsync(ApiLogOnRequestDTO dto)
        {
            var username = dto.UserName;

            string json = JsonConvert.SerializeObject(dto);

            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "POST",
                    Url = ApiBaseUrl + "/session",
                    PostData = new PostData
                    {
                        MimeType = "application/json",
                        Params = new Parameters(new NameValuePair("", dto))
                    }
                }
            };


            Task<Entry> getResponseTextTask = EnqueueRequestAsync(entry);

            Task<ApiLogOnResponseDTO> deserializeTask = getResponseTextTask.ContinueWith(task =>
            {
                switch (task.Status)
                {

                    case TaskStatus.Faulted:
                        throw task.Exception;
                    default:
                        var logonDTO = JsonConvert.DeserializeObject<ApiLogOnResponseDTO>(task.Result.Response.Content.Text);
                        SessionId = logonDTO.Session;
                        Username = username;

                        // get client account as it is necessary information

                        var accountInfoTask = GetClientAndTradingAccountAsync();
                        accountInfoTask.Wait();
                        AccountInformation = accountInfoTask.Result;

                        return logonDTO;
                }

            });


            return deserializeTask.ContinueWith(task => task.Result);
        }


        public Task<ApiLogOffResponseDTO> LogOutAsync()
        {
            string json = JsonConvert.SerializeObject(new ApiLogOffRequestDTO() { UserName = Username, Session = SessionId });
            var entry = new Entry
            {
                // TODO: talk about why the api takes a post with querystring and an empty body - this causes problems for some http clients
                Request = new Request
                {
                    Method = "POST",
                    Url = ApiBaseUrl + "/session/deleteSession?UserName={UserName}&session={session}",
                    PostData = new PostData
                    {
                        MimeType = "application/json",
                        Params = new Parameters()
                    },
                    QueryString = new QueryString(
                        new NameValuePair("UserName", Username),
                        new NameValuePair("session", SessionId)
                        )
                }
            };

            Task<Entry> getResponseTextTask = EnqueueRequestAsync(entry);

            Task<ApiLogOffResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var logOffRequestDTO =
                        JsonConvert.DeserializeObject<ApiLogOffResponseDTO>(task.Result.Response.Content.Text);
                    SessionId = null;
                    Username = null;
                    AccountInformation = null;
                    return logOffRequestDTO;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }
    }
}
