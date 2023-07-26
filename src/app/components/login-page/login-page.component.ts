import { Component } from '@angular/core';
import { MyApiService } from 'src/app/services/my-api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
   
  constructor(private apiService:MyApiService){}

  user:string = ''
  password: string = ''

  
  login(){
    const loginData = {
      user : this.user,
      password : this.password
    }
    this.apiService.makelogin(loginData)
  }
  
}
