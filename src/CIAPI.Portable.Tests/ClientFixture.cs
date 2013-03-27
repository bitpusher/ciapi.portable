using System;
using System.Diagnostics;
using System.Threading.Tasks;
using CIAPI.Portable.Model;
using CIAPI.Portable.Rpc;
using NUnit.Framework;
using Salient.Portable.HttpArchiveFormat;

namespace CIAPI.Portable.Tests
{
    [TestFixture]
    public class ClientFixture
    {
        [Test]
        public void GenerateAPIException()
        {
            var client = new Client
            {
                ApiBaseUrl = "https://ciapi.cityindex.com/tradingapi"
            };

            var t = client.LoginAsync(new ApiLogOnRequestDTO() { UserName = "foo" });

            try
            {
                t.Wait();
            }
            catch (AggregateException ex)
            {
                // TODO: make sure exceptions are constructed consistently so that
                // end user can easily respond.
                // probably a good strategy is when we catch and exception in the client,
                // if it is an aggregate with a single inner, just set exception to the inner, not the aggregate.

                var flattened = ex.Flatten();
                Debugger.Break();

            }
        }



        [Test]
        public void CanEnqueueRequestAsync()
        {
            var entry = new Entry
                {
                    Request = new Request
                        {
                            Method = "POST",
                            Url = "http://posttestserver.com/post.php?dump&a={a}",
                            QueryString = new QueryString
                                {
                                    new NameValuePair
                                        {
                                            Name = "a",
                                            Value = "avalue"
                                        }
                                },
                            PostData = new PostData
                                {
                                    MimeType = "text/plain",
                                    Params = new Parameters
                                        {
                                            // naked
                                            new NameValuePair {Name = string.Empty, Value = "fooo"},
                                            //named
                                            new NameValuePair {Name = "param", Value = "paramValue"}
                                        }
                                },
                            Headers = new Headers
                                {
                                    new NameValuePair
                                        {
                                            Name = "arbitrary-header",
                                            Value = "header value"
                                        }
                                }
                        }
                };


            var client = new Client();

            Task<Entry> t = client.EnqueueRequestAsync(entry);

            // this will throw if exceptions occur in task
            t.Wait();



            Entry result = t.Result;

            Response response = result.Response;


            string responseText = response.Content.Text;

            Assert.AreEqual(response.Content.Size, responseText.Length);

            Assert.IsTrue(responseText.Contains("HTTP_ARBITRARY_HEADER = header value\n"));
            Assert.IsTrue(responseText.Contains("CONTENT_TYPE = text/plain\n"));
            Assert.IsTrue(responseText.Contains("QUERY_STRING = dump&a=avalue\n"));
            Assert.IsTrue(responseText.Contains("== Begin post body ==\nfooo&param=paramValue\n== End post body ==\n"));
            // 
        }


        [Test]
        public void CanLoginToCI()
        {
            var client = new Client
                {
                    ApiBaseUrl = "https://ciapi.cityindex.com/tradingapi"
                };

            var  loginTask = client.LoginAsync(new ApiLogOnRequestDTO
                {
                    UserName = "xx663766",
                    Password = "password1"
                });

            // simple block till completion. Async completion can be used by getting the awaiter or setting a .ContinueWith task
            try
            {
                loginTask.Wait();
            }
            catch (Exception ex)
            {
                
                throw;
            }


            // the response dto is available in loginTask.Result if 
            // you want to check passwordchangerequired etc but the client
            // has already intercepted the response and set it's SessionId
            // and fetched user's AccountInformation


            Assert.AreEqual("xx663766", client.Username);
            Assert.IsNotNullOrEmpty(client.SessionId);
            Assert.IsNotNull(client.AccountInformation);

            var logOutTask = client.LogOutAsync();

            logOutTask.Wait();


            Assert.IsNull(client.SessionId);
            Assert.IsNull(client.Username);
            Assert.IsNull(client.AccountInformation);
        }
    }
}