import { Component, Inject } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private service: AuthService) { }

  ngOnInit() { }

  onClick() {
  }

  onSubmit(formValue: any) {
    const result = this.service.loginWithCredentials(formValue.login.username, formValue.login.password);
    console.log(result);
  }
}
