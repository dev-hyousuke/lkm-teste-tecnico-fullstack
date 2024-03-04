using LKM.WebAPI.ToDos.Models;

namespace LKM.WebAPI.ToDos.Repositories;

public interface ITarefaRepository
{
    IEnumerable<Tarefa> ListarTarefas();
    Tarefa BuscarTarefa(Guid id);
    void AdicionarTarefa(Tarefa tarefa);
    void AtualizarTarefa(Tarefa tarefa);
    void AtualizarStatus(Guid id);
    void ExcluirTarefa(Tarefa tarefa);
}
