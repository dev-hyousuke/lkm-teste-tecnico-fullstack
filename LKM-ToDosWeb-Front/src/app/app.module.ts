import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './Components/lista-tarefas/lista-tarefas.component';
import { AddTarefaComponent } from './Components/add-tarefa/add-tarefa.component';
import { EditTarefaComponent } from './Components/edit-tarefa/edit-tarefa.component';
import { TarefaService } from './Services/tarefa.service';
import { AuthService } from './Services/auth.service';
import { LoginComponent } from './Components/login/login.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AuthGuard } from './Guard/auth.guard';
import { AuthInterceptor } from './Guard/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';

export const routes: Routes = [
  { path: '', redirectTo: '/listar', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'listar', component: ListaTarefasComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddTarefaComponent, canActivate: [AuthGuard] },
  { path: 'editar/:id', component: EditTarefaComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [    
    AppComponent,
    LoginComponent,
    NavBarComponent,
    ListaTarefasComponent,
    AddTarefaComponent,
    EditTarefaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
  ],
  providers: [HttpClient, TarefaService, AuthService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
