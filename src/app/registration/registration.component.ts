import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    name: '',
    email: ''
  };

  constructor(private http: HttpClient) {}

  register() {
    this.http.post('http://localhost:3000/register', this.user)
      .subscribe(response => {
        console.log('Server Response:', response);
      }, error => {
        console.error('Error:', error);
      });
  }
}