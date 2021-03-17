import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DeptService } from 'src/app/core/dept.service';
import { EmpService } from 'src/app/core/emp.service';
import { Department } from 'src/app/core/model/department';
import { Employee } from 'src/app/core/model/employee';

@Component({
  selector: 'app-emps-form',
  templateUrl: './emps-form.component.html',
  styleUrls: ['./emps-form.component.scss']
})
export class EmpsFormComponent implements OnInit {
  
  id:FormControl;
  name:FormControl;
  basic:FormControl;
  joindate:FormControl;
  gender:FormControl;
  officeComute:FormControl;
  deptId:FormControl;

  empForm:FormGroup;

  msg : string;

  depts:Department[];

  isEditing:boolean;
  constructor(
    private empService:EmpService,
    private deptService:DeptService,
    private actRoute : ActivatedRoute) { 

    this.isEditing=false;

    this.id=new FormControl('',[Validators.required,Validators.min(1)]);
    this.name=new FormControl('',[Validators.required,Validators.minLength(5)]);
    this.basic=new FormControl('',[Validators.required,Validators.min(0)]);
    this.joindate=new FormControl(new Date(),[Validators.required]);
    this.gender=new FormControl('',[Validators.required]);
    this.officeComute=new FormControl(false);
    this.deptId=new FormControl('',[Validators.required]);

    this.empForm=new FormGroup({
      id:this.id,
      name:this.name,
      basic:this.basic,
      joindate:this.joindate,
      gender:this.gender,
      officeComute:this.officeComute,
      deptId:this.deptId
    });

    this.depts=[];
  }

  ngOnInit(): void {

    this.deptService.getAll().subscribe(
      (data) => {this.depts=data;console.log(JSON.stringify(data));}
    );      

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
