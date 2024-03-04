import { Component } from '@angular/core';
import { TarefaService } from '../../Services/tarefa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-tarefa',
  standalone: false,
  templateUrl: './add-tarefa.component.html',
  styleUrl: './add-tarefa.component.scss'
})
export class AddTarefaComponent {
  tarefaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public tarefaService: TarefaService, private toasterService: ToastrService) { 
    this.tarefaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  submitForm(){
    this.tarefaService.AdicionarTarefa({
      titulo: this.tarefaForm.get('titulo')?.value,
      descricao: this.tarefaForm.get('descricao')?.value
    }).subscribe({complete: console.info});
    this.toasterService.success(`Tarefa Criada!`, 'Criada com sucesso!');
    this.tarefaForm.reset();
  }
}
