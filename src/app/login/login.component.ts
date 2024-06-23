import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {







  ngOnInit(): void {
   const localData = localStorage.getItem('user')
   if(localData != null ){
    this.signupUsers = JSON.parse(localData)
   }
  
  }

  constructor(public router:Router, public app:ServiceService){}

  signupUsers: any[] = []

  signupObj:any = {
    userName: '',
    email: '',
    password: ''
  }

  loginObj:any = {
    email: '',
    password: ''
  }

  
  logUser() {
   
     let userExist = this.signupUsers.find((item:any)=> item.email == this.loginObj.email && item.password == this.loginObj.password )
     console.log(userExist);
     this.app.userSender.next(userExist)
     

     if(userExist){
      alert("User Login Successfully")
      this.router.navigate(["/"])
     }else{
       alert("Wrong credentials")
     }
      
   
    }


    signUp(){
       
  
    
    if(this.signupObj.email != '' && this.signupObj.userName != '' && this.signupObj.password != '' ){
      this.signupUsers.push(this.signupObj)
      this.showHideForm = !this.showHideForm
      alert("Your Registration was successfully")

    }else{
      alert("Try Again, Fill all Fields!")
    }


    console.log( "sss",this.signupUsers);
    localStorage.setItem("user", JSON.stringify(this.signupUsers))
    // localStorage.clear()
    this.signupObj  = {
      userName: '',
      email: '',
      password: ''
    }

   
    }





  public showHideForm: boolean = false

  register() {
    this.showHideForm = !this.showHideForm
  }

  login() {
    this.showHideForm = !this.showHideForm
  }

}
