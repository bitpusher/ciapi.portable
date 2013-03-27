using System.Collections.Generic;

namespace Salient.Portable.HttpArchiveFormat
{
    public class Cookies : List<Cookie>
    {
        public Cookies()
        {
        }

        public Cookies(params Cookie[] cookies)
        {
            foreach (Cookie cookie in cookies)
            {
                Add(cookie);
            }
        }

        public Cookies(IEnumerable<Cookie> cookies)
        {
            foreach (Cookie cookie in cookies)
            {
                Add(cookie);
            }
        }
    }
}