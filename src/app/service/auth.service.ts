import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthData } from '../shared/interfaces';

const BASEURL = 'http://localhost:3000/api/chatapp';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(body): Observable<AuthData> {
    return this.http.post<AuthData>(`${BASEURL}/register`, body);
  }

  loginUser(body): Observable<AuthData> {
    return this.http.post<AuthData>(`${BASEURL}/login`, body);
  }
}
