import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { AddTarefaComponent } from './add-tarefa/add-tarefa.component';
import { EditTarefaComponent } from './edit-tarefa/edit-tarefa.component';
import { TarefaService } from './tarefa.service';

export const routes: Routes = [
  {path: '', redirectTo: '/listar', pathMatch: 'full'},
  {path: 'add', component: AddTarefaComponent},
  {path: 'listar', component: ListaTarefasComponent},
  {path: 'editar/:id', component: EditTarefaComponent}
];

@NgModule({
  declarations: [    
    AppComponent,
    ListaTarefasComponent,
    AddTarefaComponent,
    EditTarefaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpClient, TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
