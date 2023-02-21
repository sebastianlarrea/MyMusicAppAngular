import { Component } from '@angular/core';
import { LOGIN_URL } from 'app/constants';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss'],
})
export class LoginButtonComponent {
  redirectToLogin() {
    window.location.href = LOGIN_URL;
  }
}
