import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public name: string;
  public emailRegistro: string;
  public fotoUsuario: string;
  //Si está logueado


  constructor(public authService: AuthService) { }

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
}
