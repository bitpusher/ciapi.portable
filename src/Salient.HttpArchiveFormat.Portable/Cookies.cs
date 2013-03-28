using System.Collections.Generic;

namespace Salient.Portable.HttpArchiveFormat
{
    public class Cookies : List<Cookie>
    {
        /// <summary>
        /// 
        /// </summary>
        public Cookies()
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="cookies"></param>
        public Cookies(params Cookie[] cookies)
        {
            foreach (Cookie cookie in cookies)
            {
                Add(cookie);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="cookies"></param>
        public Cookies(IEnumerable<Cookie> cookies)
        {
            foreach (Cookie cookie in cookies)
            {
                Add(cookie);
            }
        }
    }
}