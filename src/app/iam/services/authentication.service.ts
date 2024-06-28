import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import {SignInRequest} from "../model/sign-in.request";
import {SignInResponse} from "../model/sign-in.response";
import {SignUpRequest} from "../model/sign-up.request";
import {SignUpResponse} from "../model/sign-up.response";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  basePath: string = `${environment.serverBasePath}`;
  httpOptions = { headers: new HttpHeaders({'Content-type': 'application/json'}) };

  private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private signedInUsername: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router, private http: HttpClient) {
    const isSignedIn = localStorage.getItem('isSignedIn') === 'true';
    this.signedIn.next(isSignedIn);
    if (isSignedIn) {
      const userId = Number(localStorage.getItem('userId') || '0');
      this.signedInUserId.next(userId);
      const username = localStorage.getItem('username') || ''; // Proporcionar un valor predeterminado en caso de null
      this.signedInUsername.next(username);
      const token = localStorage.getItem('token') || '';
      console.log(`Signed in as ${username} with token ${token}`);
    }
  }

  get isSignedIn() {
    return this.signedIn.asObservable();
  }

  get currentUserId() {
    return this.signedInUserId.asObservable();
  }

  get currentUsername() {
    return this.signedInUsername.asObservable();
  }

  /**
   * Sign up a new user.
   * @param signUpRequest The sign up request.
   * @returns The sign up response.
   */
  signUp(signUpRequest: SignUpRequest): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(`${this.basePath}/authentication/sign-up`, signUpRequest, this.httpOptions);
  }
  /**
   * Sign in a user.
   * @param signInRequest The sign in request.
   * @returns The sign in response.
   */
  signIn(signInRequest: SignInRequest) {
    console.log(signInRequest);
    return this.http.post<SignInResponse>(`${this.basePath}/authentication/sign-in`, signInRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          this.signedIn.next(true);
          localStorage.setItem('isSignedIn', 'true'); // Almacenar el estado de la sesión
          this.signedInUserId.next(response.id);
          localStorage.setItem('userId', response.id.toString());
          this.signedInUsername.next(response.username);
          localStorage.setItem('username', response.username); // Almacenar el username
          localStorage.setItem('token', response.token);
          console.log(`Signed in as ${response.username} with token ${response.token}`);
          this.router.navigate(['/']).then();
        },
        error: (error) => {
          this.signedIn.next(false);
          localStorage.setItem('isSignedIn', 'false');
          this.signedInUserId.next(0);
          this.signedInUsername.next('');
          console.error(`Error while signing in: ${error}`);
          this.router.navigate(['/sign-in']).then();
        }
      });
  }

  /**
   * Sign out a user.
   *
   * This method signs out a user by clearing the token from local storage and navigating to the sign-in page.
   */
  signOut() {
    this.signedIn.next(false);
    localStorage.removeItem('isSignedIn');
    this.signedInUserId.next(0);
    localStorage.removeItem('userId');
    this.signedInUsername.next('');
    localStorage.removeItem('username'); // Borrar el username
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in']).then();
  }
}
