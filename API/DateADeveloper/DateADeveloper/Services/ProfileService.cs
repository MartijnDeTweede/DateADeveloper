using DateADeveloper.Models;
using DateADeveloper.Repository;
using System;
using System.Linq;

namespace DateADeveloper.Services
{
    public class ProfileService : IProfileService
    {
        private readonly DateADeveloperDbContext _dbContext;
        public ProfileService(DateADeveloperDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public Profile GetProfileByUserId(string userId)
        {
            var item = _dbContext.Profile.FirstOrDefault(p => p.UserId == userId);

            if(item == null)
            {
                return GetDefaultProfile();
            }

            var profile = new Profile
            {
                UserId = item.UserId,
                ScreenName = item.ScreenName,
                Description = item.Description,
                PictureUri = item.PictureUri,
                Type = (ProfileType)Enum.Parse(typeof(ProfileType), item.Type)
            };
            return profile;
        }

        private Profile GetDefaultProfile()
        {
            return new Profile
            {
                UserId = "",
                ScreenName = "John do",
                Description = "",
                PictureUri = null,
                Type = ProfileType.NotSelected
            };
        }
    }
}
