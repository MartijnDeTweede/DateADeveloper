
using DateADeveloper.Models;

namespace DateADeveloper.Services
{
    public interface IProfileService
    {
        Profile GetProfileByUserId(string userId);
    }
}
