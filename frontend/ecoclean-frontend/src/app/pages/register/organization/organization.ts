/*import { Component } from '@angular/core';

@Component({
  selector: 'app-organization',
  imports: [],
  templateUrl: './organization.html',
  styleUrl: './organization.css',
})
export class Organization {}*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-organization',
  imports: [FormsModule, RouterLink],
  templateUrl: './organization.html',
  styleUrl: './organization.css'
})
export class Organization {

  // Organization information
  organizationName = '';
  organizationType = '';
  registrationNumber = '';
  organizationEmail = '';
  organizationPhone = '';
  website = '';

  // Authorized representative
  representativeName = '';
  representativeDesignation = '';
  representativeEmail = '';
  representativePhone = '';

  // Address and operations
  address = '';
  city = '';
  state = 'Gujarat';
  pincode = '';
  serviceArea = '';
  employeeCount = '';
  vehicleCount = '';

  // Supporting document
  registrationDocument: File | null = null;
  registrationDocumentName = '';

  // Account security
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirmPassword = false;

  // Form status
  termsAccepted = false;
  submitted = false;
  errorMessage = '';

  onDocumentSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    this.errorMessage = '';
    this.registrationDocument = null;
    this.registrationDocumentName = '';

    if (!file) return;

    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png'
    ];

    const maxSize = 5 * 1024 * 1024;

    if (!allowedTypes.includes(file.type)) {
      this.errorMessage =
        'Please upload a PDF, JPG or PNG document.';
      input.value = '';
      return;
    }

    if (file.size > maxSize) {
      this.errorMessage =
        'Document size must not exceed 5 MB.';
      input.value = '';
      return;
    }

    this.registrationDocument = file;
    this.registrationDocumentName = file.name;
  }

  onSubmit(): void {
    this.errorMessage = '';
    this.submitted = false;

    if (!this.registrationDocument) {
      this.errorMessage =
        'Please upload your organization registration document.';
      return;
    }

    if (this.password.length < 8) {
      this.errorMessage =
        'Password must contain at least 8 characters.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    if (!this.termsAccepted) {
      this.errorMessage =
        'Please accept the verification and privacy terms.';
      return;
    }

    /*
      FRONTEND DEMONSTRATION ONLY.

      Later backend integration will:
      1. Submit organization information.
      2. Upload supporting documents securely.
      3. Verify organization and representative details.
      4. Hash the password securely.
      5. Create an application with PENDING status.
      6. Allow Admin to review the application.
      7. Activate the organization after approval.
    */

    this.submitted = true;
  }
}

