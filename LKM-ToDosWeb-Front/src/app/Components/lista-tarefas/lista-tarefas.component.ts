import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../Services/tarefa.service';
import { TarefaModel } from '../../Models/tarefa-model';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-tarefas',
  standalone: false,
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.scss'
})
export class ListaTarefasComponent implements OnInit {
    constructor(private tarefaService: TarefaService, private toasterService: ToastrService) { }

    public tarefas: Observable<TarefaModel[]> = new Observable<TarefaModel[]>();
        
    public ngOnInit(): void {
      this.ListarTarefas(); 
    }

    public ListarTarefas(): void {
      this.tarefas = this.tarefaService.ListarTarefas();
    }

    public AtualizarStatus(id: any): void {
      console.log(id);
      this.tarefaService.AtualizarStatus(id)
      .subscribe({
        next: () => {
          this.ListarTarefas();
          this.toasterService.success(`Status Atualizado!`, 'Sucesso');
        },
        error: error => {
          console.error('Erro ao atualizar status da tarefa:', error);
          this.toasterService.error(`Erro ao atualizar status da tarefa`, 'Erro');
        }
      });
    }

    ExcluirTarefa(id: number | undefined) {
      if (id === undefined) {
        return;
      }

      this.tarefaService.ExcluirTarefa(id)
      .subscribe({
        next: () => {
          this.ListarTarefas();
          this.toasterService.error(`Tarefa Deletada!`, 'Deletada com sucesso!');
        },
        error: error => {
          console.error('Erro ao excluir tarefa:', error);
        }
      });
    }
}
