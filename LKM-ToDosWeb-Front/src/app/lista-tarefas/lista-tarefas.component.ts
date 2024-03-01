import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { TarefaModel } from './tarefa-model';

@Component({
  selector: 'app-lista-tarefas',
  standalone: false,
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.scss'
})
export class ListaTarefasComponent implements OnInit {
    constructor(private tarefaService: TarefaService) { }

    public tarefas: TarefaModel[] = [];
    public ngOnInit(): void {
      this.ListarTarefas(); 
    }

    public ListarTarefas(): void {
      this.tarefaService.ListarTarefas()
        .subscribe(tarefas => {
          this.tarefas = tarefas;         
        });
    }

    public AdicionarTarefa(tarefa: TarefaModel): void {
      this.tarefaService.AdicionarTarefa(tarefa);
      this.ListarTarefas(); 
    }
}
