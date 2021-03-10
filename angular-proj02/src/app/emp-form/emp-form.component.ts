import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

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

  msg : string;

  isEditing:boolean;

  constructor(
    private empService:EmployeeService,
    private actRoute : ActivatedRoute) { 

    this.isEditing=false;

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
    this.actRoute.params.subscribe(
      (prms) => {
        if(prms.id){
          this.empService.getById(prms.id).subscribe(
            (data) => {              
              this.isEditing=true;
              this.empForm.setValue(data);
            }
          );
        }
      }
    );
  }

  empFormSubmited(){    
    let ob:Observable<Employee> = null;

    if(this.isEditing){
      ob= this.empService.update(this.empForm.value);
    }else{
      ob= this.empService.add(this.empForm.value);
    }

    ob.subscribe(
      (emp) => {
        this.msg = `Employee#${emp.id} is saved successfully`;
        this.empForm.reset();
      },
      (err) => {
        this.msg= err.message?err.message:err;
      }
    );
  }
}
