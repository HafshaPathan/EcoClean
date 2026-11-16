/*import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}*/

/*import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  showPassword = false;
  submitted = false;

  onSubmit() {
    if (!this.email.trim() || !this.password.trim()) {
      return;
    }

    this.submitted = true;
  }
}
*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  showPassword = false;
  rememberMe = false;

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.email.trim() || !this.password) {
      this.errorMessage = 'Please enter your email and password.';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    if (this.password.length < 8) {
      this.errorMessage = 'Password must contain at least 8 characters.';
      return;
    }

    /*
      BACKEND INTEGRATION WILL BE ADDED LATER.

      Future login process:
      1. Send email and password to backend.
      2. Backend verifies the credentials.
      3. Backend returns authenticated user information.
      4. Frontend checks the user's role.
      5. Navigate to the correct dashboard.

      No real authentication happens in this frontend version.
    */

    this.errorMessage =
      'Login authentication is not connected yet. Please try again after backend integration.';
  }

  onForgotPassword(): void {
    this.errorMessage =
      'Password recovery will be available after backend integration.';
  }
}

