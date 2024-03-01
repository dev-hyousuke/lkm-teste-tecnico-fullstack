import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TarefaService } from './tarefa.service';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';

@NgModule({
  declarations: [    
    AppComponent,
    ListaTarefasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [HttpClient, TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
