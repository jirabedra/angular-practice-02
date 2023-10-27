using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MoviesServer.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class MoviesController : ControllerBase
  {
    private RandomBooleanGenerator _randomBooleanGenerator;
    public MoviesController(RandomBooleanGenerator randomBooleanGenerator)
    {
      _randomBooleanGenerator = randomBooleanGenerator;
    }
  
    [HttpGet]
    public IActionResult GetAllMovies()
    {
      if (_randomBooleanGenerator.GetRandomBoolean()){
        return Ok(new List<string> { "Barbie", "Oppenheimer", "Barbenheimer" });
      } else
      {
        return NotFound("Couldnt load movies");
      }
    }
  }
}
