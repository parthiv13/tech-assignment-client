import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable, of, Observer } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  profile: Observable<User> = of(null);
  private authLoginUrl = 'http://localhost:8080/api/login';
  private authSignupUrl = 'http://localhost:8080/api/signup'

  signup(user: User): Observable<User> {
    this.profile = this.http.post<User>(this.authSignupUrl, user);
    return this.profile;
  }

  login(user: User): Observable<User> {
    this.profile = this.http.post<User>(this.authLoginUrl, user);
    return this.profile;
  }

  getProfile(): Observable<User> {
    return this.profile;
  }
}
