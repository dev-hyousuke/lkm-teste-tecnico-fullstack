import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/Auth`;
  private readonly TOKEN_KEY = 'auth_token';
  private isAuthenticated = false;

  constructor(private http: HttpClient) { }

  public VerificarToken(): boolean {
    return this.isAuthenticated;
  }

  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public setToken(): void {
    this.isAuthenticated = true;
  }
  
  public login(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Login`, usuario);
  }

  public logout(): void {
    localStorage.removeItem("auth_token");
    this.isAuthenticated = false;
  }
}
