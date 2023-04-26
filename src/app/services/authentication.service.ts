import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  readonly token :string = 'eyJwYXNzd29yZCI6IjhlZDQ2ZDgifQ';
  constructor() { }

  setToken(key:string){
    localStorage.setItem(key, this.token);
  }

  getToken(key:string){
   return localStorage.getItem(key);
  }

  removeToken(key:string){
    localStorage.removeItem(key);
  }
}
