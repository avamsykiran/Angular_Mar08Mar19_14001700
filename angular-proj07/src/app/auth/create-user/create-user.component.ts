import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User;
  errMsg: string;
  constructor(private authService: AuthService, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  register() {
    this.user.role = "hra";
    this.authService.signUp(this.user).subscribe(
      (data) => {
        this.router.navigateByUrl("/hra");
      },
      (err) => {
        this.errMsg = err;
      }
    );
  }

}
