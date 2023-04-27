import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageBox } from 'src/app/model/messageBox';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  userDetails = {email : 'user@user.com', password : '8ed46d8'};

  loginMessage:MessageBox = {title: 'congratulations', message : 'you have successfully logged in!', path: 'book', actionName: 'my books'};
  unauthorisedMessage:MessageBox = {title: 'error', message : 'error found!', path: '', actionName:'close'};

  constructor(private fb : FormBuilder, private authService : AuthenticationService, private genericService: GenericService) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(){
    this.loginForm = this.fb.group({
        userName : new FormControl('', Validators.required),
        password : new FormControl('', Validators.required)
    });
  }

  isFieldControls(field:string){
    return (!this.loginForm.get(field)?.valid && this.loginForm.get(field)?.touched);
  }

  onAuthenticateUser(){
      const user = this.loginForm.value;
      if(this.userDetails.email === user.userName && this.userDetails.password === user.password){
          this.authService.setToken('token');
          this.genericService.openMessage(this.loginMessage);
      }else{
          this.genericService.openMessage(this.unauthorisedMessage);
      }
  }

}
