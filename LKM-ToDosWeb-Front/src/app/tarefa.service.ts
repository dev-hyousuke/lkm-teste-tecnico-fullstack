import { Injectable } from '@angular/core';
import { environment } from "./environments/environment";
import { HttpClient } from "@angular/common/http";
import { TarefaModel } from './lista-tarefas/tarefa-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  constructor(private http: HttpClient) { }

  private baseUrl = `${environment.apiUrl}/Tarefa`;

  public ListarTarefas(): Observable<TarefaModel[]> {
    return this.http.get<TarefaModel[]>(this.baseUrl);          
  }

  public AdicionarTarefa(tarefa: TarefaModel): void{
    this.http.post<TarefaModel>(this.baseUrl, tarefa);          
  }
}