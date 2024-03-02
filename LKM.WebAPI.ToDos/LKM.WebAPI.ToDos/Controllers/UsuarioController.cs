using Microsoft.AspNetCore.Mvc;
using LKM.WebAPI.ToDos.Services;
using LKM.WebAPI.ToDos.Models;

namespace LKM.WebAPI.ToDos.Controllers;

[ApiController]
[Route("[controller]")]
public class UsuarioController : ControllerBase
{
    private readonly AuthService _authService;
    private readonly IUsuarioService _service;


    public UsuarioController(AuthService authService, IUsuarioService service)
    {
        _authService = authService;
        _service = service;
    }

    [HttpPost("login")]
    public IActionResult Login(Usuario usuario)
    {
        var result = _service.ValidarUsuario(usuario);
        if (result)
        {
            return Ok(_authService.GerarToken());
        }
        return BadRequest();
    }
}