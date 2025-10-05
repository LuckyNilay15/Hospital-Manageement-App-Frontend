import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { AuthService } from '../../services/auth';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, RouterLink],
  templateUrl: './register.html'
  
})
export class RegisterComponent {
  form: any = { username:'', email:'', phone:'', password:'', age:null, gender:'', blood_group:'' };
  error = '';
  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    this.error = '';
    this.auth.registerPatient(this.form).subscribe({
      next: _ => this.router.navigate(['/patient']),
      error: err => this.error = err?.error?.message || 'Registration failed'
    });
  }
}
