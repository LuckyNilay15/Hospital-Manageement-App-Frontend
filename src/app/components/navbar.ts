import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { TokenStorageService } from '../services/token-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  constructor(public store: TokenStorageService, private router: Router) {}
  logout() {
    this.store.clear();
    this.router.navigate(['/login']);
  }
}
