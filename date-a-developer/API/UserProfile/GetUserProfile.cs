using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using DateADeveloper.ViewModels;

namespace UserProfile
{
    public static class GetUserProfile
    {
        [FunctionName("GetUserProfile")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req,
            ILogger log)
        {

            var defaultProfile = new Profile
            {
                ScreenName = "John do",
                Description = "Fill out your profile",
                Type = ProfileType.NotSelected,
            };

            return new JsonResult(defaultProfile);
        }
    }
}
