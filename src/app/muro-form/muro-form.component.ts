import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-muro-form',
  templateUrl: './muro-form.component.html',
  styleUrls: ['./muro-form.component.css']
})
export class MuroFormComponent implements OnInit {

  muroForm: FormGroup;
  muroList$: AngularFireList<any>;

  constructor(private formBuilder: FormBuilder, private database: AngularFireDatabase) {
    this.createMuroForm();
    this.muroList$ = this.database.list('/muro');
  }

  ngOnInit() {
  }

  createMuroForm() {
    this.muroForm = this.formBuilder.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      post: ['', Validators.required]
    });
  }

  addMuro() {
    const newMuro = {
      title: this.muroForm.value.title,
      image: this.muroForm.value.image,
      description: this.muroForm.value.post,
    };

    this.muroList$.push(newMuro);

    this.muroForm.reset();
  }
}
