using System.Collections.Generic;
using System.IO;
using System.Text;
using CIAPI.Portable.Rpc;
using NUnit.Framework;
using Salient.Portable.HttpArchiveFormat;
using Salient.Portable.ReliableHttpClient;

namespace CIAPI.Portable.Tests
{
    [TestFixture]
    public class HelperFixture
    {
        [Test]
        public void EnsureRequestPreparation()
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
                        Params = new Parameters
                                        {
                                            // naked
                                            new NameValuePair {Name = string.Empty, Value = "fooo"},
                                            //named
                                            new NameValuePair {Name = "param", Value = "paramValue"}
                                        }
                    }
                }
            };

            Helper.PrepareEntryRequest(entry);
            Assert.AreEqual("http://posttestserver.com/post.php?dump&a=avalue", entry.Request.Url);
            Assert.AreEqual("fooo&param=paramValue", entry.Request.PostData.Text);
        }
       
   

    }
}