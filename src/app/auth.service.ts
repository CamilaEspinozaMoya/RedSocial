import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any = null;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  loginFacebook() {
    return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // Registro del usuario
  signup(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  // Login con email y password
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

  // Obtener los datos del usuario si está logueado
  getAuth() {
    return this.firebaseAuth.authState.pipe(map(auth => auth));
  }

  // Cerrar sesión
  logout() {
    return this.firebaseAuth
      .auth
      .signOut();
  }
}
