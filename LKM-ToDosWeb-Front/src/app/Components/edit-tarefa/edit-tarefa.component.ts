import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../Services/tarefa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TarefaModel } from '../../Models/tarefa-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-tarefa',
  standalone: false,
  templateUrl: './edit-tarefa.component.html',
  styleUrl: './edit-tarefa.component.scss'
})
export class EditTarefaComponent implements OnInit{
  tarefaForm: FormGroup;
  tarefa?: TarefaModel;

  constructor(
    private formBuilder: FormBuilder,
    public tarefaService: TarefaService,
    private route: ActivatedRoute,
    private toasterService: ToastrService
  ) { 
    this.tarefaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.BuscarTarefa(this.route.snapshot.paramMap.get('id'));
  }

  public BuscarTarefa(id: any): void {
    this.tarefaService.BuscarTarefa(id).subscribe( 
      (result) => {
        this.tarefa = result as TarefaModel;
    },
    (error) => {
      console.error("Erro ao buscar tarefa:", error);
    });
  }

  submitForm(){
    this.tarefaService.AtualizarTarefa({
      id: this.route.snapshot.paramMap.get('id'),
      titulo: this.tarefaForm.get('titulo')?.value,
      descricao: this.tarefaForm.get('descricao')?.value
    }).subscribe({complete: console.info});
    this.toasterService.success(`Tarefa Editada!`, 'Atualizada com sucesso!');
    this.tarefaForm.reset();
  }
}