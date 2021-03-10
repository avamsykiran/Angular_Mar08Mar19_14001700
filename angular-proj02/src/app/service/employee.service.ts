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

  getById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.empApiUrl}/${id}`);
  }

  add(emp:Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(this.empApiUrl,emp);
  }

  update(emp:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.empApiUrl}/${emp.id}`,emp);
  }

  delete(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.empApiUrl}/${id}`);
  }
}
