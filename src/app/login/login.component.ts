import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupUsers: any[] = [];
  signupObj:any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    userName: '',
    Password: ''
  };

  constructor( private route: Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  
    
  }
  onSignUp() {
   this.signupUsers.push(this.signupObj);
   localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
   this.signupObj = {
    userName: '',
    email: '',
    password: ''
  };
  
  
  }


  onLogin() {

const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password) ;
 if(isUserExist != undefined) {
alert("User Login Successfully");
this.route.navigateByUrl('/home');
} else {
alert( "wrong credential");


  

  // console.log(this.signupUsers);
  const data = this.signupUsers.find(res=>console.log(res.userName)
  )
  
    console.log(this.loginObj.userName);
    console.log(this.loginObj.password);
  
  
  
  

}
 
}}
