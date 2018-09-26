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

  constructor(public authService: AuthService, private formBuilder: FormBuilder, public snackBar: MatSnackBar) { }

  ngOnInit() {
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
