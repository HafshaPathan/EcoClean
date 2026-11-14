/*import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {}*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  fullName = '';
  email = '';
  phone = '';
  password = '';
  confirmPassword = '';
  role = 'Citizen';

  showPassword = false;
  showConfirmPassword = false;

  submitted = false;
  errorMessage = '';

  onSubmit() {
    this.errorMessage = '';

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match. Please try again.';
      return;
    }

    this.submitted = true;
  }
}

