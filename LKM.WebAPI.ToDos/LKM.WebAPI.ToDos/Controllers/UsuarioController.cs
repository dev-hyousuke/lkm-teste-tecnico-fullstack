using Microsoft.AspNetCore.Mvc;
using LKM.WebAPI.ToDos.Services;

namespace LKM.WebAPI.ToDos.Controllers;

[ApiController]
[Route("[controller]")]
public class UsuarioController : ControllerBase
{
    private readonly AuthService _authService;

    public UsuarioController(AuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public IActionResult Login()
    {
        return Ok(_authService.GerarToken());
    }
}