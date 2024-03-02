using LKM.WebAPI.ToDos.Models;
using Microsoft.EntityFrameworkCore;

namespace LKM.WebAPI.ToDos.Context;

public class ToDosDbContext : DbContext
{
    public ToDosDbContext(DbContextOptions<ToDosDbContext> options) : base(options)
    {
    }

    public DbSet<Tarefa> Tarefas { get; set; }
    public DbSet<Usuario> Usuarios { get; set; }
}
