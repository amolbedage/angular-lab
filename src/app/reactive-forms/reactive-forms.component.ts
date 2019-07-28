import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

   public userProfile:FormGroup;
   public submitted =false;
  constructor() { 

         this.userForm();

  }

  userForm(){
     
    this.userProfile= new FormGroup({
           firstName : new FormControl(),
           lastName: new FormControl(),
           street: new FormControl(''),
           city: new FormControl(''),
           state: new FormControl(''),
           zip: new FormControl('')
         
   });
          

  }

  ngOnInit() {
  }

   // convenience getter for easy access to form fields
   get f() { return this.userProfile.controls; }
   

  saveUserData(){
      //alert("ss")
      this.submitted = true;
    let userData=this.userProfile.value;  
    let userDataAdd=this.userProfile.value.address;  
    this.userProfile= new FormGroup({
      firstName : new FormControl(userData.firstName,[Validators.pattern('[a-zA-Z ]*'),Validators.required,Validators.minLength(2)]),
      lastName:new FormControl(userData.lastName,[Validators.required]),
      street: new FormControl(userData.street,[Validators.required]),
      city: new FormControl(userData.city,[Validators.required]),
      state: new FormControl(userData.state,[Validators.required]),
      zip: new FormControl(userData.zip,[Validators.required])
     
    })
    console.log(this.userProfile.value)
    console.log(this.userProfile.valid)

  }

}
