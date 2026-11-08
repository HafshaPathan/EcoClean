/*import { Component } from '@angular/core';

@Component({
  selector: 'app-navigationpage',
  imports: [],
  templateUrl: './navigationpage.html',
  styleUrl: './navigationpage.css',
})
export class Navigationpage {}
*/

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigationpage.html',
  styleUrl: './navigationpage.css'
})
export class Navigation {

  menuOpen = false;

  closeMenu() {
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
