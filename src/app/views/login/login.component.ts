import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  mensagemErroEmail = new MyErrorStateMatcher();

  usuarioFormControl = new FormControl('', [Validators.required]);
  mensagemErroUsuario = new MyErrorStateMatcher();

  senhaFormControl = new FormControl('', [Validators.required]);
  mensagemErroSenha = new MyErrorStateMatcher();

  possuiConta: boolean = true;
  objetoFormCadastro: Cadastro = new Cadastro();
  objetoFormLogin: Login = new Login();

  constructor(private router: Router){}

  cadastrar() {
    const localUser = localStorage.getItem('angular17users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(this.objetoFormCadastro);
      localStorage.setItem('angular17users', JSON.stringify(users))
    } else {
      const users = [];
      users.push(this.objetoFormCadastro);
      localStorage.setItem('angular17users', JSON.stringify(users))
    }
    alert('Cadastrado(a)!')
  }

  login() {
    const localUsers = localStorage.getItem('angular17users');
    if(localUsers != null) {
      const users = JSON.parse(localUsers);

      const existeUsuario = users.find((user: Cadastro) => user.email == this.objetoFormLogin.email && user.senha == this.objetoFormLogin.senha);
      if(existeUsuario != undefined) {
        localStorage.setItem('usuarioLogado', JSON.stringify(existeUsuario));
        this.router.navigateByUrl('/home');
      } else {
        alert("No user found!")
      }
    }
  }
}

export class Cadastro {
  email: string;
  senha: string;

  constructor() {
    this.email = "";
    this.senha = "";
  }
}

export class Login {
  email: string;
  senha: string;

  constructor() {
    this.email = "";
    this.senha = "";
  }
}
