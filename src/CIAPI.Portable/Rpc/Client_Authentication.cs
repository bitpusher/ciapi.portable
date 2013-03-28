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
        public Task<ApiLogOnResponseDTO> LoginAsync(string username, string password)
        {
            var dto = new ApiLogOnRequestDTO
                {
                    UserName = username,
                    Password = password
                };


            Task<ApiLogOnResponseDTO> getResponseTextTask = Authentication.LogOnAsync(dto);

            Task<ApiLogOnResponseDTO> deserializeTask = getResponseTextTask.ContinueWith(task =>
            {
                switch (task.Status)
                {

                    case TaskStatus.Faulted:
                        throw task.Exception;
                    default:

                        SessionId = task.Result.Session;
                        Username = username;
                        return task.Result;
                }
            });

            Task<ApiLogOnResponseDTO> accountInfoTask = deserializeTask.ContinueWith(task =>
                {
                    var t = AccountInformation.GetClientAndTradingAccountAsync();
                    t.Wait();
                    CurrentAccountInformation = t.Result;
                    return task.Result;
                });

            return accountInfoTask.ContinueWith(task => task.Result);
        }


        public Task<ApiLogOffResponseDTO> LogOutAsync()
        {

            Task<ApiLogOffResponseDTO> getResponseTextTask = Authentication.DeleteSessionAsync(Username, SessionId);

            Task<ApiLogOffResponseDTO> deserializeTask =
                getResponseTextTask.ContinueWith(task =>
                {
                    if (task.Result.LoggedOut)
                    {
                        SessionId = null;
                        Username = null;
                        CurrentAccountInformation = null;
                    }

                    return task.Result;
                });

            return deserializeTask.ContinueWith(task => task.Result);
        }
    }
}
