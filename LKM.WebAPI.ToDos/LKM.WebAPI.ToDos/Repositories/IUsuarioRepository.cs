using LKM.WebAPI.ToDos.Models;

namespace LKM.WebAPI.ToDos.Repositories;

public interface IUsuarioRepository
{
    Usuario BuscarUsuario(string email);
}
