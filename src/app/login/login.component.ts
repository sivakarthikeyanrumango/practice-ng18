import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'ng18-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm : FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private toast: ToastrService){
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    }, {} as FormControlOptions)
  }

  login(){
    if(!this.loginForm.valid){ 
      this.toast.error('Please Input Values', 'Error');
      return false; 
    }
    const loggedin = this.authService.login(this.loginForm.get('login')?.value, this.loginForm.get('password')?.value);
    if(loggedin){
      this.toast.success('Logged in Successfully', 'Success')
      this.router.navigate(['/dashboard'])
      return true;
    }else{
      this.toast.error('Something wrong please try again', 'Success')
      this.router.navigate(['/dashboard'])
      return true;
    }
    
  }
}
