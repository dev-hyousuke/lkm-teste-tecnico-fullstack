import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { 
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    if(this.authService.VerificarToken())
    {
      this.router.navigate(["/listar"]);
    }
  }

  submitForm(){
    this.authService.login({
      email: this.loginForm.get('email')?.value,
      senha: this.loginForm.get('senha')?.value
    }).subscribe({
      next: (res) => {
        localStorage.setItem("auth_token", res.authToken);
        this.authService.setToken();
        this.router.navigate(["/listar"]);
        console.log("login sucess")
      },
      error: error => {
        console.error('Erro ao excluir tarefa:', error);
      }
    });
    this.loginForm.reset();
  }
}