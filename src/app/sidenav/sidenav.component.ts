import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(formBuuilder: FormBuilder, private database: AngularFireDatabase, private authService: AuthService) { }

  ngOnInit() {
  }

}
