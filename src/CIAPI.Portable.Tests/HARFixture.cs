using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using Newtonsoft.Json;
using Salient.Portable.HttpArchiveFormat;

namespace CIAPI.Portable.Tests
{
    [TestFixture]
    public class HARFixture
    {

        [Test]
        public void EnsureNewtonsoftSerializesDataMemberProperly()
        {
            var v = new VersionInfo { Name = "myname", Version = "myversion", Comment = "mycomment" };
            var actual = JsonConvert.SerializeObject(v);
            string expected = "{\"name\":\"myname\",\"version\":\"myversion\",\"comment\":\"mycomment\"}";
            Assert.AreEqual(expected, actual);


        }

 
    }
}
