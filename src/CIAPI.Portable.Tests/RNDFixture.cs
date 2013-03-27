using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace CIAPI.Portable.Tests
{
    [TestFixture]
    public class RNDFixture
    {
        [Test]
        public void TestTaskChaining()
        {
            var rnd = new RND();
            Debug.WriteLine("starting async request");
            var task = rnd.Combined();
            Debug.WriteLine("waiting for request to complete");
            task.Wait();
            Debug.WriteLine("task finished. here is the payload: \r\n\t" + task.Result);
        }
    }
}
