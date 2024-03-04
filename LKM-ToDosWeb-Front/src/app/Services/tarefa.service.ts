import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { TarefaModel } from '../Models/tarefa-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  constructor(private http: HttpClient) { }

  private baseUrl = `${environment.apiUrl}/Tarefa`;
  private token = localStorage.getItem("auth_token");

  public ListarTarefas(): Observable<TarefaModel[]> {
    return this.http.get<TarefaModel[]>(this.baseUrl); 
  }

  public BuscarTarefa(id: any): Observable<TarefaModel> {
    return this.http.get<TarefaModel>(`${this.baseUrl}/${id}`);
  }

  public AdicionarTarefa(tarefa: any): Observable<any>{
    return this.http.post<any>(this.baseUrl, tarefa);
  }

  public AtualizarTarefa(tarefa: any): Observable<any>{
    return this.http.put<any>(this.baseUrl, tarefa);
  }

  public AtualizarStatus(id: any): Observable<any>{
    const params = { id: id };
    return this.http.patch<any>(this.baseUrl, null, { params });
  }

  public ExcluirTarefa(id: number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}