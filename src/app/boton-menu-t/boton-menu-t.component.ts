import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-boton-menu-t',
  templateUrl: './boton-menu-t.component.html',
  styleUrls: ['./boton-menu-t.component.css']
})
export class BotonMenuTComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
