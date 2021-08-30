using DateADeveloper.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DateADeveloper.Viewmodels
{
    public class Profile
    {
        public string UserId { get; set; }
        public string ScreenName { get; set; }
        public string Description { get; set; }
        public string PictureUri { get; set; }
        public ProfileType Type { get; set; }
    }
}
