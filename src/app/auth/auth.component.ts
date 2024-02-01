declare var google: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  ngOnInit(): void {
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
      width: 300,
    });
  }

  googleData(res: any) {
    const userData = JSON.parse(atob(res.split('.')[1]));
    sessionStorage.setItem('userData', JSON.stringify(userData));
  }
}
