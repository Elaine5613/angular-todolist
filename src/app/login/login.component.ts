import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor() {}

  ngOnInit() {}

  onClick(username: string, password: string) {
    console.log(`${username} : ${password}`);
  }
}
