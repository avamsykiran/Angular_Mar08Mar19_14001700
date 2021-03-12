import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Department } from './model/department';

@Injectable({
  providedIn: 'any'
})
export class DeptService {

  deptApiUrl: string;
  constructor(private httpClient: HttpClient) {
    this.deptApiUrl=environment.deptApiUrl;
  }

  getAll():Observable<Department[]>{
    return this.httpClient.get<Department[]>(this.deptApiUrl);
  }

  getById(id:number):Observable<Department>{
    return this.httpClient.get<Department>(`${this.deptApiUrl}/${id}`);
  }

  getNameById(id:number):Observable<string>{
    return this.httpClient.get<Department>(`${this.deptApiUrl}/${id}`)
    .pipe(
      map(d=>d.name)
    );
  }

  delete(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.deptApiUrl}/${id}`);
  }

  add(dept:Department):Observable<Department>{
    return this.httpClient.post<Department>(this.deptApiUrl,{id:dept.id,name:dept.name});
  }

  update(dept:Department):Observable<Department>{
    return this.httpClient.put<Department>(`${this.deptApiUrl}/${dept.id}`,{id:dept.id,name:dept.name});
  }
}
