import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  readonly token :string = 'eyJwYXNzd29yZCI6IjhlZDQ2ZDgifQ';
  public isLoggedIn: boolean = false;
  constructor(private router: Router) { }

  setToken(key:string){
    localStorage.setItem(key, this.token);
  }

  getToken(key:string){
   return localStorage.getItem(key);
  }

  removeToken(key:string){
    localStorage.removeItem(key);
    this.isLoggedIn = false;
    this.router.navigate(['sign-in']);
  }  
}
