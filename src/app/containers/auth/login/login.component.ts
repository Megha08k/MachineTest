import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageBoxComponent } from 'src/app/components/message-box/message-box.component';
import { MessageBox } from 'src/app/model/messageBox';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  userDetails = {email : 'user@user.com', password : '8ed46d8'};

  loginMessage:MessageBox = {title: 'congeatulations', message : 'you have successfully logged in!', path: 'book', actionName: 'my books'};
  unauthorisedMessage:MessageBox = {title: 'error', message : 'error found!', path: '', actionName:'close'};

  constructor(private fb  : FormBuilder, private router : Router, private authService : AuthenticationService, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(){
    this.loginForm = this.fb.group({
        userName : new FormControl('user@user.com', Validators.required),
        password : new FormControl('8ed46d8', Validators.required)
    });
  }

  isFieldControls(field:string){
    return (!this.loginForm.get(field)?.valid && this.loginForm.get(field)?.touched);
  }

  onAuthenticateUser(){
      const user = this.loginForm.value;
      if(this.userDetails.email.includes(user.userName) && this.userDetails.password.includes(user.password)){
          this.authService.setToken('token');
          this.openMessage(this.loginMessage);
      }else{
          this.openMessage(this.unauthorisedMessage);
      }
  }

  openMessage(data:MessageBox){
    this.dialog.open(MessageBoxComponent, {
      data: data,
      width: '600px',
    });
  }

}
