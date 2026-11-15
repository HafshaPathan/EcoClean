/*import { Component } from '@angular/core';

@Component({
  selector: 'app-collector',
  imports: [],
  templateUrl: './collector.html',
  styleUrl: './collector.css',
})
export class Collector {}*/

import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collector',
  imports: [FormsModule, RouterLink],
  templateUrl: './collector.html',
  styleUrl: './collector.css'
})
export class Collector implements OnDestroy {

  // Personal information
  fullName = '';
  email = '';
  phone = '';
  address = '';

  // Profile photograph
  profilePhoto: File | null = null;
  profilePhotoName = '';
  profilePhotoPreview = '';

  // Identity verification
  identityType = '';
  identityNumber = '';
  identityDocument: File | null = null;
  selectedFileName = '';

  // Work information
  serviceArea = '';
  experience = '';
  previousOrganization = '';

  // Account security
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirmPassword = false;

  // Application
  termsAccepted = false;
  submitted = false;
  errorMessage = '';

  // Profile photograph upload
  onProfilePhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    this.errorMessage = '';

    if (this.profilePhotoPreview) {
      URL.revokeObjectURL(this.profilePhotoPreview);
      this.profilePhotoPreview = '';
    }

    this.profilePhoto = null;
    this.profilePhotoName = '';

    if (!file) return;

    const allowedTypes = ['image/jpeg', 'image/png'];
    const maxSize = 2 * 1024 * 1024;

    if (!allowedTypes.includes(file.type)) {
      this.errorMessage = 'Profile photo must be JPG or PNG format.';
      input.value = '';
      return;
    }

    if (file.size > maxSize) {
      this.errorMessage = 'Profile photo must not exceed 2 MB.';
      input.value = '';
      return;
    }

    this.profilePhoto = file;
    this.profilePhotoName = file.name;
    this.profilePhotoPreview = URL.createObjectURL(file);
  }

  // Identity document upload
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    this.errorMessage = '';
    this.identityDocument = null;
    this.selectedFileName = '';

    if (!file) return;

    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'application/pdf'
    ];

    const maxSize = 5 * 1024 * 1024;

    if (!allowedTypes.includes(file.type)) {
      this.errorMessage =
        'Identity document must be JPG, PNG or PDF.';
      input.value = '';
      return;
    }

    if (file.size > maxSize) {
      this.errorMessage =
        'Identity document must not exceed 5 MB.';
      input.value = '';
      return;
    }

    this.identityDocument = file;
    this.selectedFileName = file.name;
  }

  // Form submission
  onSubmit(): void {
    this.errorMessage = '';
    this.submitted = false;

    if (!this.profilePhoto) {
      this.errorMessage = 'Please upload your profile photograph.';
      return;
    }

    if (!this.identityDocument) {
      this.errorMessage = 'Please upload your identity document.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    if (this.password.length < 8) {
      this.errorMessage =
        'Password must contain at least 8 characters.';
      return;
    }

    if (!this.termsAccepted) {
      this.errorMessage =
        'Please accept the verification and privacy terms.';
      return;
    }

    /*
      FRONTEND DEMONSTRATION ONLY.

      Backend integration will later:
      1. Submit applicant information.
      2. Upload profile photograph.
      3. Upload identity document to private storage.
      4. Verify email and mobile number.
      5. Securely hash the password.
      6. Create application with PENDING status.
      7. Allow Admin to review and approve/reject.
      8. Activate the Collector account after approval.
    */

    this.submitted = true;
  }

  // Release temporary preview URL
  ngOnDestroy(): void {
    if (this.profilePhotoPreview) {
      URL.revokeObjectURL(this.profilePhotoPreview);
    }
  }
}

