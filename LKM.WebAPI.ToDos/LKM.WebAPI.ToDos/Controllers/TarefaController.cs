using Microsoft.AspNetCore.Mvc;
using LKM.WebAPI.ToDos.Models;
using LKM.WebAPI.ToDos.Services;
using Microsoft.AspNetCore.Authorization;

namespace LKM.WebAPI.ToDos.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class TarefaController : ControllerBase
{
    private readonly ITarefaService _service;

    public TarefaController(ITarefaService service) => _service = service;

    [HttpGet]
    [AllowAnonymous]
    public IEnumerable<Tarefa> Get() 
        => _service.ListarTarefas();

    [HttpGet("{id}")]
    public ActionResult<Tarefa> Get(Guid id)
    {
        var tarefa = _service.BuscarTarefa(id);

        if (tarefa == null)
            return NotFound();

        return tarefa;
    }

    [HttpPost]
    public ActionResult<Tarefa> Post(Tarefa tarefa)
    {
        _service.AdicionarTarefa(tarefa);
        return Ok();
    }

    [HttpPut]
    public ActionResult<Tarefa> Put(Tarefa tarefa)
    {
        _service.AtualizarTarefa(tarefa);
        return Ok();
    }

    [HttpDelete("{id}")]
    public ActionResult<Tarefa> Delete(Guid id)
    {
        var tarefa = _service.BuscarTarefa(id);

        if (tarefa == null)
        {
            return NotFound();
        }

        _service.ExcluirTarefa(tarefa);
        return Ok();
    }
}