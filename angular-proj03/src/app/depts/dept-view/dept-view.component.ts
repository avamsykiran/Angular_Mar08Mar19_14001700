import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Department } from 'src/app/core/model/department';

@Component({
  selector: 'app-dept-view',
  templateUrl: './dept-view.component.html',
  styleUrls: ['./dept-view.component.css']
})
export class DeptViewComponent implements OnInit {
  @Input()
  dept:Department;

  @Output()
  onEdit:EventEmitter<number>;
  
  @Output()
  onDelete:EventEmitter<number>;

  constructor() { 
    this.dept=null;
    this.onEdit=new EventEmitter<number>();
    this.onDelete=new EventEmitter<number>();
  }

  ngOnInit(): void {
  }


  notifyEditClicked(){
    this.onEdit.emit(this.dept.id);
  }
  
  notifyDeleteClicked(){
    this.onDelete.emit(this.dept.id);
  }
}
