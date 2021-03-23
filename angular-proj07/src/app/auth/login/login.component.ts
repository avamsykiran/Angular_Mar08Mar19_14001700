import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  errMsg:string;
  constructor(private authService:AuthService,private router:Router) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }

  login(){
    this.authService.signIn(this.user).subscribe(
      (data) => {
        this.authService.getUserByMail(this.user.email).subscribe(
          (u) => {
            if(u.role.toLowerCase()=="admin"){
              this.router.navigateByUrl("/admin");
            }else{
              this.router.navigateByUrl("/hra");
            }
          }
        );
      },
      (err) =>{
        this.errMsg="Invlaid Credits!";
      }
    );
  }
}
