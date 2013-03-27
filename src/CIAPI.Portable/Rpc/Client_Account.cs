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
        public Task<AccountInformationResponseDTO> GetClientAndTradingAccountAsync()
        {
            var entry = new Entry
            {
                Request = new Request
                {
                    Method = "GET",
                    Url = ApiBaseUrl + "/useraccount/ClientAndTradingAccount"

                }
            };


            Task<Entry> getResponseTextTask = EnqueueRequestAsync(entry);

            Task<AccountInformationResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    var accountInformation =
                        JsonConvert.DeserializeObject<AccountInformationResponseDTO>(task.Result.Response.Content.Text);
                    AccountInformation = accountInformation;
                    return accountInformation;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }

    }
}
