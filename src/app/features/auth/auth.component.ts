declare var google: any;
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from './auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  constructor(private router: Router, private authServ: authService) {}

  form: FormGroup;
  signIn = true;
  isError = '';

  ngOnInit(): void {
    // form
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      pass: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    // Google
    google.accounts.id.initialize({
      client_id:
        '638827466645-v485amo6q5l59vjsqanpqndjakrlh5o6.apps.googleusercontent.com',
      callback: (res) => {
        this.googleData(res.credential);
      },
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_black',
      size: 'large',
      shape: 'rectangle',
      width: 280,
    });
  }

  googleData(res: any) {
    const userData = JSON.parse(atob(res.split('.')[1]));
    sessionStorage.setItem('userData', JSON.stringify(userData));
    this.authServ.user.next(userData);
    this.router.navigate(['/home']);
  }

  // submit form
  onSubmit() {
    if (!this.signIn) {
      // SignUp
      this.authServ
        .SignUp(this.form.value.email, this.form.value.pass)
        .subscribe(
          (res) => {
            let name = this.form.value.name as string;
            res['name'] = name[0].toUpperCase() + name.slice(1, name.length);
            sessionStorage.setItem('userData', JSON.stringify(res));
            this.authServ.user.next(res);
            this.router.navigate(['/home']);
          },
          (error) => {
            this.isError = error;
            this.disappearError();
          }
        );
    } else {
      // SignIn
      this.authServ
        .SignIn(this.form.value.email, this.form.value.pass)
        .subscribe(
          (res) => {
            let name = this.form.value.name as string;
            res['name'] = name[0].toUpperCase() + name.slice(1, name.length);
            sessionStorage.setItem('userData', JSON.stringify(res));
            this.authServ.user.next(res);
            this.router.navigate(['/home']);
          },
          (error) => {
            this.isError = error;
            this.disappearError();
          }
        );
    }
  }

  disappearError() {
    setTimeout(() => {
      this.isError = '';
    }, 2000);
  }
}
