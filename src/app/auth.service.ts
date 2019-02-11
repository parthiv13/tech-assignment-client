import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable, of, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  private authLoginUrl = 'http://localhost:8080/api/login'

  getUser(user: User): Observable<User> {
    return this.http.post<User>(this.authLoginUrl, user);
  }
}
