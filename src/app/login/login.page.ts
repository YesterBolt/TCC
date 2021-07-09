import { UsersService } from './../services/user/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  token: string;
  public user: string;
  public password: string;

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
  }

  redirecionarCriarConta(): void {
    window.open('http://verdepedal.com.br/user/register', "_blank");
  }

  tryLogin() {
    this.userService.login(this.user, this.password).then((result: any) => {
      console.log(result);
      if(result.current_user.roles != undefined) {
        this.token = result.logout_token;
      }
      else {
        return;
      }
    })
    .catch((error: any) => {
      console.log(error);
    });
  }
}
