using LKM.WebAPI.ToDos.Controllers;
using LKM.WebAPI.ToDos.Models;
using LKM.WebAPI.ToDos.Services;
using Moq;

namespace LKM.Tests.ToDos;

[TestFixture]
public class TarefaControllerTests
{
    private TarefaController _controller;
    private readonly Mock<ITarefaService> _service = new();


    [SetUp]
    public void Setup()
    {
        _controller = new TarefaController(_service.Object);
    }

    [Test]
    public void GetAllTarefas()
    {
        var tarefas = new List<Tarefa>
        {
            new Tarefa { Id = new Guid("e2605475-acbc-4943-93f7-a11b4bef78f9"), Titulo = "Tarefa 1", Concluida = false },
            new Tarefa { Id = new Guid("4f168a8f-87f3-4427-a718-470cc9878cd7"), Titulo = "Tarefa 2", Concluida = true }
        };

        _service.Setup(service => service.ListarTarefas()).Returns(tarefas);

        var response = _controller.Get();

        Assert.That(response, Is.Not.Null);
        Assert.That(response, Is.InstanceOf<List<Tarefa>>());
    }
}