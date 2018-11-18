import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  token: string;

  constructor( ){}

  SignupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(result){
        console.log("account created", result);
      })
      .catch(
        error => console.log(error)
      )
  }s

  SigninUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          //this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                  this.token = token;
                  console.log('auth token set', token);
              }
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  Logout(){
    firebase.auth().signOut();
    this.token = null;
  }

  GetToken(){
    return this.token;
  }

  IsAuthenticated(){
    return this.token != null;
  }
}