import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private routeTeste: string = 'http://www.drupal.local/'
  constructor(private http: HttpClient) { }

  login(user: string, pass: string) {
    return new Promise((resolve, reject) => {
      var data = {
        name: 'admin',
        pass: 'admin'
      };

      console.log("Data: ", data)

      this.http.post(this.routeTeste + 'user/login?_format=json', data).subscribe((result: any) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      })
    });
  }

  logout(logoutToken: string) {
    return new Promise((resolve, reject) => {
      this.http.post(this.routeTeste + 'user/logout?_format=json&token=', logoutToken).subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json())
      })
    });
  }
}
