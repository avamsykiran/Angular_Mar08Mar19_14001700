import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  empApiUrl:string;

  constructor(private httpClient:HttpClient) { 
    this.empApiUrl="http://localhost:9999/emps";
  }

  getAll():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.empApiUrl);
  }
}
