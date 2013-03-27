using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace CIAPI.Portable
{
    public class RND
    {
        public Task<string> GetA()
        {
            var taskCompletionSource = new TaskCompletionSource<string>();
            Debug.WriteLine("starting async request");
            var request = WebRequest.CreateHttp("http://google.com");
            request.BeginGetResponse(a =>
                {

                    request.EndGetResponse(a);
                    taskCompletionSource.SetResult("payload");
                }, null);

            return taskCompletionSource.Task;
        }

        

        public Task<string> Combined()
        {
            Task<string> ta = GetA();
            Task<string> ttb = ta.ContinueWith(a =>
                {
                    var s = a.Result;
                    s = s + "(intercepted)";
                    Debug.WriteLine("payload intercepted. modified for clarity: \r\n\t" + s);
                    return s;
                });

            return ttb.ContinueWith(x => x.Result);

        }
    }
}
