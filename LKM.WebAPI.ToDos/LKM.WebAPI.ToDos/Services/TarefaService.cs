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

    public void AdicionarTarefa(Tarefa tarefa)
    {
        tarefa.DataCriacao = DateTime.Now;
        _repo.AdicionarTarefa(tarefa);
    }

    public void AtualizarTarefa(Tarefa tarefa)
        => _repo.AtualizarTarefa(tarefa);

    public void AtualizarStatus(Guid id)
        => _repo.AtualizarStatus(id);

    public void ExcluirTarefa(Tarefa tarefa)
        => _repo.ExcluirTarefa(tarefa);
}
