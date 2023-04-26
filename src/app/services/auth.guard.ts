import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService : AuthenticationService ,public router: Router) {}

  canActivate(): boolean {
    if(!this.authService.getToken('token')){
       this.router.navigate(['/sign-in']);
       return false;
    }
    return true;
  }
  
}
