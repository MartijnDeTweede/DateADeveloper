using DateADeveloper.Services;
using DateADeveloper.Viewmodels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DateADeveloper.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProfileController : Controller
    {
        private readonly IProfileService _profileService;

        public ProfileController(IProfileService profileService)
        {
            _profileService = profileService;
        }

        [HttpGet]
        public IActionResult GetMyProfile()
        {
            var userId = "Aap";
            var profile = _profileService.GetProfileByUserId(userId);

            var viewModel = mapProfileToViewmodel(profile);

            return new JsonResult(viewModel);
        }

        private Profile mapProfileToViewmodel(Models.Profile profile)
        {
            return new Profile()
            {
                UserId = profile.UserId,
                ScreenName = profile.ScreenName,
                Description = profile.Description,
                PictureUri = profile.PictureUri,
                Type = profile.Type
            };
        }
    }
}
