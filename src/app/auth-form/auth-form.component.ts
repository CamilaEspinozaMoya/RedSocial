import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  authForm: FormGroup;
  public email: string;
  public password: string;


  constructor(private formBuilder: FormBuilder, private authService: AuthService, public snackBar: MatSnackBar, public router: Router) {

    this.createAuthForm();
  }

  ngOnInit() {
  }

  createAuthForm() {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

  /*
   * Instalé un módulo para hacer snackbars desde material.angular.io :
   * MatSnackBarModule
   */
  onRegister() {
    this.authService.signup(this.authForm.value.email, this.authForm.value.password)
      .then(value => {
        console.log('Se ha registrado con éxito', value);
      })
      .catch(() => {
        this.snackBar.open('Error de registro, trata otra vez'
          , null/*No necesitamos botón en el aviso*/
          , {
            duration: 3000
          });
      });
  }

  onLogin() {
    this.authService.login(this.authForm.value.email, this.authForm.value.password)
      .then(() => {
      })
      .catch(() => {
        this.snackBar.open('Error al tratar de iniciar sesión, trata otra vez'
          , null/*No necesitamos botón en el aviso*/
          , {
            duration: 3000
          });
      });
  }

  onLogout() {
    this.authService.logout()
      .then(() => {
      })
      .catch(() => {
        this.snackBar.open('Error al tratar de cerrar sesión, trata otra vez'
          , null/*No necesitamos botón en el aviso*/
          , {
            duration: 3000
          });
      });
  }

  onClickGoogleLogin(){
    this.authService.loginGoogle()
    .then((res) => {
      console.log('Autentificación con Google exitosa');
      console.log(res);
      this.router.navigate(['/muro']);
    }).catch(err => console.log(err.message));
  }

  onClickFacebookLogin() {
    this.authService.loginFacebook()
    .then((res) => {
      console.log(res);
      this.router.navigate(['/sidenav']);
    }).catch(err => console.log(err.message));
  }

}

