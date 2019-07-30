import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private cookieService: CookieService) {}

  setToken(token): void {
    this.cookieService.set('chat_token', token);
  }

  getToken(): string {
    return this.cookieService.get('chat_token');
  }

  deleteToken(): void {
    this.cookieService.delete('chat_token');
  }
}
