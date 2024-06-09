import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'http://localhost:3000/user'; // URL a tu archivo JSON

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => {
        const user = users.find(u => u.gmail === email && u.contraseña === password);
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          return true;
        }
        return false;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser')!);
  }

  register(email: string, username:string ,password: string): Observable<any> {
    const newUser = { id: this.generateId(), gmail: email, username:username ,contraseña: password };
    return this.http.post<any>(this.usersUrl, newUser);
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
