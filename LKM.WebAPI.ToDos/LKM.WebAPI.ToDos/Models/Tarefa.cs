namespace LKM.WebAPI.ToDos.Models;

public class Tarefa
{
    public Guid Id { get; set; }
    public string? Titulo { get; set; }
    public string? Descricao { get; set; }
    public DateTime DataCriacao { get; set; }
    public bool Concluida { get; set; }
}