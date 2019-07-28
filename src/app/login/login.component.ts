import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {DataService} from '../data.service';
import {AuthService } from '../guards/auth.service'
import { HttpClient } from '@angular/common/http';

import { map } from "rxjs/operators";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

  constructor(
    private dataService : DataService,
    private http :HttpClient,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private AuthService:AuthService,
    ) { 

  }


ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    // reset login status
    this.AuthService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.AuthService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                   this.router.navigate(['dashboard']);
            },
            error => {
              this.router.navigate([this.returnUrl]);
                this.error = error;
                this.loading = false;
            });
}

 


}



