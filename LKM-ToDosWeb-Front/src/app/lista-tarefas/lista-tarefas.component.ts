import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { TarefaModel } from './tarefa-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-tarefas',
  standalone: false,
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.scss'
})
export class ListaTarefasComponent implements OnInit {
    constructor(private tarefaService: TarefaService) { }

    public tarefas: Observable<TarefaModel[]> = new Observable<TarefaModel[]>();
        
    public ngOnInit(): void {
      this.ListarTarefas(); 
    }

    public ListarTarefas(): void {
      this.tarefas = this.tarefaService.ListarTarefas();
    }

    ExcluirTarefa(id: number | undefined) {
      if (id === undefined) {
        console.error('ID da tarefa é indefinido.');
        return;
      }

      this.tarefaService.ExcluirTarefa(id)
      .subscribe({
        next: () => {
          console.log('Tarefa excluída com sucesso.');
          this.ListarTarefas(); // Chamando ListarTarefas após a exclusão bem-sucedida
        },
        error: error => {
          console.error('Erro ao excluir tarefa:', error);
        }
      });
    }
}
