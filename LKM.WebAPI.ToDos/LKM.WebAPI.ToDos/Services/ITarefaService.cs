using LKM.WebAPI.ToDos.Models;

namespace LKM.WebAPI.ToDos.Services;

public interface ITarefaService
{
    IEnumerable<Tarefa> ListarTarefas();
    Tarefa BuscarTarefa(Guid id);
    void AdicionarTarefa(Tarefa tarefa);
    void AtualizarTarefa(Tarefa tarefa);
    void AtualizarStatus(Guid id);
    void ExcluirTarefa(Tarefa tarefa);
}
