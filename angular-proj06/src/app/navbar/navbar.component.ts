import { Component, OnInit } from '@angular/core';
import { DeptService } from '../core/dept.service';
import { EmpService } from '../core/emp.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  deptCount: number;
  empCount: number;
  constructor(
    private empService: EmpService,
    private deptService: DeptService) {
      this.empCount=0;
      this.deptCount=0;
  }

  ngOnInit(): void {

    this.empService.getAll().subscribe(
      data => this.empCount = data.length
    );

    this.deptService.getAll().subscribe(
      data => this.deptCount = data.length
    );
  }

}
