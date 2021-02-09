import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : any = {
    user:'',
    password:''
  }

  logged = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login():void{

    const data = {
      user: this.user.user,
      info: this.user.password
    };

    this.authService.login(data)
      .subscribe(response => {
        console.log(response);
        this.logged = true;
      },
      error => {
        console.log(error);
      });

  }


}
