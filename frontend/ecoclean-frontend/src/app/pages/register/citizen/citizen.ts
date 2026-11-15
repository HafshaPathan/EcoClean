/*import { Component } from '@angular/core';

@Component({
  selector: 'app-citizen',
  imports: [],
  templateUrl: './citizen.html',
  styleUrl: './citizen.css',
})
export class Citizen {}
*/
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-citizen',
  imports: [FormsModule, RouterLink],
  templateUrl: './citizen.html',
  styleUrl: './citizen.css'
})
export class Citizen {

  fullName = '';
  email = '';
  phone = '';
  address = '';

  password = '';
  confirmPassword = '';

  showPassword = false;
  showConfirmPassword = false;

  submitted = false;
  errorMessage = '';

  onSubmit() {
    this.errorMessage = '';
    this.submitted = false;

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    if (this.password.length < 8) {
      this.errorMessage = 'Password must contain at least 8 characters.';
      return;
    }

    // Frontend demonstration only.
    // Real account creation will be implemented through the backend.
    this.submitted = true;
  }
}