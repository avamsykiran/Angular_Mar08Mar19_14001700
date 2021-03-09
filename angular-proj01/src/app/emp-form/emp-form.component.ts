import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  id:FormControl;
  name:FormControl;
  basic:FormControl;
  joindate:FormControl;
  gender:FormControl;
  officeComute:FormControl;

  empForm:FormGroup;

  constructor() { 
    this.id=new FormControl('',[Validators.required,Validators.min(1)]);
    this.name=new FormControl('',[Validators.required,Validators.minLength(5)]);
    this.basic=new FormControl('',[Validators.required,Validators.min(0)]);
    this.joindate=new FormControl(new Date(),[Validators.required]);
    this.gender=new FormControl('',[Validators.required]);
    this.officeComute=new FormControl(false);

    this.empForm=new FormGroup({
      id:this.id,
      name:this.name,
      basic:this.basic,
      joindate:this.joindate,
      gender:this.gender,
      officeComute:this.officeComute
    });
  }

  ngOnInit(): void {
  }

}
