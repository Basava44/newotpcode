import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  otp = '';

  ngOnInit(): void {
    console.log('WEB OTP API');
  }

  submit() {
    console.log('Hello World');
    console.log(this.otp);
  }
}
