import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { PatientDashboardComponent } from './pages/patient/patient-dashboard/patient-dashboard';
import { DoctorDashboardComponent } from './pages/doctor/doctor-dashboard/doctor-dashboard';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard';
import { authGuard } from './guards/auth-guard';
import { roleGuard } from './guards/role-guard';
import { Landing } from './pages/landing/landing';
import { NotFound } from './pages/not-found/not-found'; // Make sure this component exists
import { AboutComponent } from './about/about';
export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' }, // Blank route → redirect to landing
  { path: 'landing', component: Landing },
  { path: 'login', component: LoginComponent },
  { path: 'register/patient', component: RegisterComponent },
  { path: 'about', component: AboutComponent },

  {
    path: 'patient',
    component: PatientDashboardComponent,
    canMatch: [authGuard, roleGuard],
    data: { roles: ['PATIENT'] }
  },
  {
    path: 'doctor',
    component: DoctorDashboardComponent,
    canMatch: [authGuard, roleGuard],
    data: { roles: ['DOCTOR'] }
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canMatch: [authGuard, roleGuard],
    data: { roles: ['ADMIN'] }
  },

  // Wildcard route for undefined paths (404)
  { path: '**', component: NotFound }
];