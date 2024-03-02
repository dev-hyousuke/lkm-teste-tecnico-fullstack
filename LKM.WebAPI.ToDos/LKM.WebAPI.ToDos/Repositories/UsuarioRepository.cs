using LKM.WebAPI.ToDos.Context;
using LKM.WebAPI.ToDos.Models;

namespace LKM.WebAPI.ToDos.Repositories;

public class UsuarioRepository : IUsuarioRepository
{
    private readonly ToDosDbContext _dbContext;

    public UsuarioRepository(ToDosDbContext dbContext) => _dbContext = dbContext;

    public Usuario BuscarUsuario(string email)
        => _dbContext.Usuarios.FirstOrDefault(e => e.Email == email);

}
