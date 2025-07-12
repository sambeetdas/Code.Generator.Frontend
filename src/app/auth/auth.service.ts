import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { RegisterDto, LoginDto } from '../auth/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

  register(user: RegisterDto) {
    return this.http.post(`${this.apiUrl}/api/Auth/register`, user);
  }

  login(user: LoginDto) {
    return this.http.post(`${this.apiUrl}/api/Auth/login`, user).subscribe((res: any) => {
      this.token = res.token;
      localStorage.setItem('token', this.token);
      this.router.navigate(['/projects']);
    });
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}