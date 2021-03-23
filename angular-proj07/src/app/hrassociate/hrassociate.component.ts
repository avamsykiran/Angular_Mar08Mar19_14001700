import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-hrassociate',
  templateUrl: './hrassociate.component.html',
  styleUrls: ['./hrassociate.component.css']
})
export class HrassociateComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl("/");
  }
}
