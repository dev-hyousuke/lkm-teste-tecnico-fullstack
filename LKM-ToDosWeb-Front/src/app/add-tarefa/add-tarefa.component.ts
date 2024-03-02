import { Component } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-tarefa',
  standalone: false,
  templateUrl: './add-tarefa.component.html',
  styleUrl: './add-tarefa.component.scss'
})
export class AddTarefaComponent {
  tarefaForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public tarefaService: TarefaService) 
  { 
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
    this.tarefaForm.reset();
  }
}
