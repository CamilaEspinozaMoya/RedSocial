import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-muro-feed',
  templateUrl: './muro-feed.component.html',
  styleUrls: ['./muro-feed.component.css']
})
export class MuroFeedComponent implements OnInit {
  muro$: Observable<any>;
  constructor(private database: AngularFireDatabase) {
    this.muro$ = this.database.list('/memes').valueChanges();
  }

  ngOnInit() {
  }

}
