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
}

export class Cadastro {
  usuario: string;
  email: string;
  senha: string;

  constructor() {
    this.usuario = "";
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
