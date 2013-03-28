using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Salient.Portable.HttpArchiveFormat;


namespace Salient.Portable.ReliableHttpClient
{
    /// <summary>
    /// 
    /// </summary>
    public class ClientBase
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="e"></param>
        /// <returns></returns>
        public virtual Task<Entry> EnqueueRequestAsync(Entry e)
        {
            // TODO: implement throttled queue using Task/Parallel classes
            // TODO: use reactive extensions observable to implement missing request timeout functionality
            // http://stackoverflow.com/questions/6411850/implement-an-async-timeout-in-silverlight

            // clone the entry as we are going to modify it.


            var entry = Helper.CloneObject<Entry>(e);

            Helper.PrepareEntryRequest(entry);

            var taskCompletionSource = new TaskCompletionSource<Entry>();

            HttpWebRequest r = WebRequest.CreateHttp(entry.Request.Url);

            r.Method = entry.Request.Method;

            if (entry.Request.Headers != null)
            {
                foreach (NameValuePair header in entry.Request.Headers)
                {
                    r.Headers[header.Name] = header.Value.ToString();
                }
            }

            byte[] bytes = null;

            if (entry.Request.PostData != null)
            {
                if (!string.IsNullOrEmpty(entry.Request.PostData.MimeType))
                {
                    r.ContentType = entry.Request.PostData.MimeType;
                }

                if (!string.IsNullOrEmpty(entry.Request.PostData.Text))
                {
                    bytes = Encoding.UTF8.GetBytes(entry.Request.PostData.Text);
                }

                r.BeginGetRequestStream(b =>
                    {
                        try
                        {
                            using (Stream rqs = r.EndGetRequestStream(b))
                            {
                                if (bytes != null && bytes.Length > 0)
                                {
                                    rqs.Write(bytes, 0, bytes.Length);
                                }
                            }
                            IssueRequest(r, entry, taskCompletionSource);
                        }
                        catch (Exception ex)
                        {
                            taskCompletionSource.SetException(ex);
                        }
                    }, r);
            }
            else
            {
                IssueRequest(r, entry, taskCompletionSource);
            }


            return taskCompletionSource.Task;
        }

        private void IssueRequest(WebRequest r, Entry entry, TaskCompletionSource<Entry> taskCompletionSource)
        {
            r.BeginGetResponse(a =>
                {
                    try
                    {
                        WebResponse webResponse = r.EndGetResponse(a);

                        byte[] rtb;
                        using (Stream rs = webResponse.GetResponseStream())
                        {
                            rtb = Helper.ReadStreamFully(rs);
                        }
                        string rt = Encoding.UTF8.GetString(rtb, 0, rtb.Length);
                        var entryResponse = new Response
                            {
                                Content = new Content
                                    {
                                        MimeType = webResponse.ContentType,
                                        Size = (int)webResponse.ContentLength,
                                        Text = rt
                                    }
                            };

                        entry.Response = entryResponse;
                        taskCompletionSource.SetResult(entry);
                    }
                    catch (WebException exc)
                    {
                        // we could get an exception here
                        try
                        {
                            Stream rs = exc.Response.GetResponseStream();
                            byte[] rtb = Helper.ReadStreamFully(rs);
                            string rt = Encoding.UTF8.GetString(rtb, 0, rtb.Length);
                            var ape = new HttpWebException { ResponseText = rt };
                            taskCompletionSource.SetException(ape);
                        }
                        catch
                        {
                            // problem extracting web exception response. just send original exception
                            taskCompletionSource.SetException(exc);
                        }
                    }
                    catch (Exception exc)
                    {
                        taskCompletionSource.SetException(exc);
                    }
                }, null);
        }
    }
}