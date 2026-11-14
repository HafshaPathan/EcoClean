/*import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  name = '';
  email = '';
  subject = '';
  message = '';
  submitted = false;

  onSubmit() {
    if (!this.name.trim() || !this.email.trim() ||
        !this.subject.trim() || !this.message.trim()) {
      return;
    }

    this.submitted = true;
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
    this.submitted = false;
  }
}

