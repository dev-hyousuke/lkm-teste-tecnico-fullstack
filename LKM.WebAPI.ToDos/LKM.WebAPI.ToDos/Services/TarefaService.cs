using LKM.WebAPI.ToDos.Models;
using LKM.WebAPI.ToDos.Repositories;

namespace LKM.WebAPI.ToDos.Services;

public class TarefaService : ITarefaService
{
    private readonly ITarefaRepository _repo;

    public TarefaService(ITarefaRepository repo)
        => _repo = repo;

    public IEnumerable<Tarefa> ListarTarefas()
        => _repo.ListarTarefas();

    public Tarefa BuscarTarefa(Guid id)
        => _repo.BuscarTarefa(id);

    public void AdicionarTarefa(Tarefa todoItem)
        => _repo.AdicionarTarefa(todoItem);

    public void AtualizarTarefa(Tarefa todoItem)
        => _repo.AtualizarTarefa(todoItem);

    public void ExcluirTarefa(Tarefa todoItem)
        => _repo.ExcluirTarefa(todoItem);
}
