import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-muro',
  templateUrl: './muro.component.html',
  styleUrls: ['./muro.component.css']
})
export class MuroComponent implements OnInit {
  @Input() postito;
  @Input() key;
  constructor(private database: AngularFireDatabase) { }

  ngOnInit() {
  }

  Borrar(key) {
    if (confirm('Estas seguro de eliminar esta publicación?')) {
    this.database.object(`muro/${key}`).remove();
    }
  }
  /*
  Editar(key) {
    this.database.object(`muro/${key}`).update();
  }

  likeButtonClick(key, numberOfLikes) {
    numberOfLikes++
    this.database.update(key, { likes:  numberOfLikes++ })
  }

  updateData(key, object){
    this.database.object(`muro/${key}`).update(object);
  }

  */

}
