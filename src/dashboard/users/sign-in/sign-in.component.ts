import { Component, OnInit } from '@angular/core';
import { UserApi } from '../users-api';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'corona-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  
  
  formError: String;
  submitting=false;
  constructor(private UserApi: UserApi, private router:Router) { 
 
  }
  onSubmit(signInForm : NgForm){


    
    if(signInForm.valid){
      console.log('submitting...', signInForm);
      this.submitting =true;
      this.UserApi.access=true;
      
    
     
this.UserApi.signIn(signInForm.value.username, signInForm.value.password)
.subscribe((data)=>{
  console.log('is valid data', data);
   if (signInForm.value.username == 'admin' && signInForm.value.password== "admin"){
    this.router.navigate(['/authenticated/admin']);
    this.UserApi.access=true;
    
   }
  else{
    this.submitting=false;
    this.UserApi.access=false;
    
    alert("You are not authorized, Please login with admin credentials")
  }
},
(error)=>{
  this.submitting=false;
  this.UserApi.access=false;
  console.log('Error occured', error);
  this.formError =error;
}
);
    
  }
  }
  ngOnInit(): void {

    
  }
  

}
