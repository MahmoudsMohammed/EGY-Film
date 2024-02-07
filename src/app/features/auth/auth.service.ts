import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class authService {
  constructor(private http: HttpClient) {}
  user = new BehaviorSubject<object>(
    JSON.parse(sessionStorage.getItem('userData')) ?? null
  );

  // sign up
  SignUp(email, password) {
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBoNz1kD1Dm7CXOqzFtxTwg8alLtrZWRc8`,
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(catchError(this.errorHandler));
  }

  // sign in
  SignIn(email, password) {
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBoNz1kD1Dm7CXOqzFtxTwg8alLtrZWRc8`,
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    let message = 'There is unknown error please try later.';
    if (!error.error.error) {
      message = 'Check Your Internet Connection.';
    } else {
      switch (error.error.error.message) {
        case 'EMAIL_EXISTS':
          message = 'The email address is already in use by another account.';
          break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          message =
            'We have blocked all requests from this device due to unusual activity. Try again later.';
          break;
        case 'INVALID_LOGIN_CREDENTIALS':
          message = 'Please SignUp First.';
          break;
        case 'INVALID_EMAIL':
          message = 'The Email you entered is not valid format.';
          break;
        case 'EMAIL_NOT_FOUND':
          message = 'There is no user Signup First.';
          break;
        case 'INVALID_PASSWORD':
          message = 'The password is invalid.';
          break;
      }
    }
    return throwError(message);
  }
}
