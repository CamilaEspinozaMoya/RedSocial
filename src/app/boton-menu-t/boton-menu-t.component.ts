import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-boton-menu-t',
  templateUrl: './boton-menu-t.component.html',
  styleUrls: ['./boton-menu-t.component.css']
})
export class BotonMenuTComponent implements OnInit {

  public name: string;
  public emailRegistro: string;
  public fotoUsuario: string;
  //Si está logueado

  constructor(public authService: AuthService, private formBuilder: FormBuilder, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.name = auth.displayName;
        this.emailRegistro = auth.email;
        this.fotoUsuario = auth.photoURL;
      } /* else {
        //Si está logueado
      }*/
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
}
