import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControlOptions } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

declare var iziToast: any;

@Component({
  selector: 'ng18-userdata',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatSelectModule,MatButtonModule, CommonModule],
  templateUrl: './userdata.component.html',
  styleUrl: './userdata.component.scss'
})
export class UserdataComponent {
  userInfoForm : FormGroup;

  constructor(private fb: FormBuilder,private toastr: ToastrService) {
    this.userInfoForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
      age: ['', [Validators.max(120), Validators.required, Validators.min(1)]]
    }, { validators: this.passwordMatchValidator } as FormControlOptions)
  }

  showToast(){
    // this.toastr.success('Hello world!', 'Toastr fun!');
    // this.toast.show('👋 Hello World!');
  //   iziToast.show({
  //     title: 'Hey',
  //     message: 'What would you like to add?'
  // });
  }

  passwordMatchValidator (form: FormGroup){
    return form.get('password')?.value === form.get('confirmPassword')?.value
    ? null : { mismatch: true };
  }

  getInvalidFields() {
    const invalidFields = Object.keys(this.userInfoForm.controls).filter(field => {
      const control = this.userInfoForm.get(field);
      return control?.invalid;
    });
    return invalidFields;
  }

  onSubmit(){
    if (this.userInfoForm.valid){
      console.log(this.userInfoForm.value)
      this.toastr.success("Submitted Successfully!", "Success")
    }else{
      const invalidFields = this.getInvalidFields();
      
      console.log('Form is Not valid.', this.getInvalidFields())
    }
  }

  readonly dialog = inject(MatDialog);

  openDialog() {

  }
}
