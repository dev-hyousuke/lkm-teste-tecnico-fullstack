using LKM.WebAPI.ToDos.Models;
using LKM.WebAPI.ToDos.Repositories;

namespace LKM.WebAPI.ToDos.Services;

public class UsuarioService : IUsuarioService
{
    private readonly IUsuarioRepository _repo;

    public UsuarioService(IUsuarioRepository repo)
        => _repo = repo;

    public bool ValidarUsuario(Usuario usuario)
    {
        var result = _repo.BuscarUsuario(usuario.Email);
        if (result != null)
        {
            if (result.Senha == usuario.Senha)
                return true;
        }
        return false;
    }
}
