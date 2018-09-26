import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  loginGoogle() {
    return this.firebaseAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

  signup(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Lgin exitoso');
      })
      .catch(err => {
        console.log('No se pudo loguear', err.message);
      });
  }

  //Obtener los datos del usuario si está logueado
  getAuth() {
    return this.firebaseAuth.authState.pipe(map( auth => auth));
  }

  logout() {
    return this.firebaseAuth
      .auth
      .signOut();
  }
}
