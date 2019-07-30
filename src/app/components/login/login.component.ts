import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  showSpinner = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginUser() {
    this.showSpinner = true;
    this.authService.loginUser(this.loginForm.value).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.loginForm.reset();
        this.router.navigate(['streams']);
      },
      err => {
        this.showSpinner = false;
        if (err.error.msg) {
          this.errorMessage = err.error.msg[0].message;
        }
        if (err.error.message) {
          this.errorMessage = err.error.message;
        }
      }
    );
  }
}
