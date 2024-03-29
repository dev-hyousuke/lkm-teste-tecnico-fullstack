﻿using LKM.WebAPI.ToDos.Context;
using LKM.WebAPI.ToDos.Models;

namespace LKM.WebAPI.ToDos.Repositories;

public class TarefaRepository : ITarefaRepository
{
    private readonly ToDosDbContext _dbContext;

    public TarefaRepository(ToDosDbContext dbContext) => _dbContext = dbContext;

    public IEnumerable<Tarefa> ListarTarefas() => _dbContext.Tarefas.ToList();

    public Tarefa BuscarTarefa(Guid id) => _dbContext.Tarefas.FirstOrDefault(e => e.Id == id);

    public void AdicionarTarefa(Tarefa tarefa)
    {

        _dbContext.Tarefas.Add(tarefa);
        _dbContext.SaveChanges();
    }

    public void AtualizarTarefa(Tarefa tarefa)
    {
        var result = _dbContext.Tarefas.FirstOrDefault(e => e.Id == tarefa.Id); 

        if (result != null)
        {
            result.Titulo = tarefa.Titulo;
            result.Descricao = tarefa.Descricao;
            _dbContext.SaveChanges();
        }
    }

    public void ExcluirTarefa(Tarefa tarefa)
    {
        _dbContext.Remove(tarefa);
        _dbContext.SaveChanges();
    }

    public void AtualizarStatus(Guid id)
    {
        var result = _dbContext.Tarefas.FirstOrDefault(e => e.Id == id);

        if (result != null)
        {
            if (result.Concluida == true)
            {
                result.Concluida = false;
            }
            else
            {
                result.Concluida = true;
            }

            _dbContext.SaveChanges();
        }
    }
}
