using LKM.WebAPI.ToDos.Models;

namespace LKM.WebAPI.ToDos.Services;

public interface IUsuarioService
{
    bool ValidarUsuario(Usuario usuario);
}
