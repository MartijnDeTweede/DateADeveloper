using System;
using System.Collections.Generic;
using System.Text;

namespace DateADeveloper.ViewModels
{
    public enum ProfileType
    {
        FrontEndDeveloper,
        BackEndDeveloper,
        Recruiter,
        FullStackDeveloper,
        CloudEngineer,
        SecurityEngineer,
        NotSelected
    }

    public class Profile
    {
        public string ScreenName { get; set; }
        public string Description { get; set; }
        public string PictureUri { get; set; }

        public ProfileType Type { get; set; }
    }
}
