import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class DeptService {

  deptApiUrl: string;
  constructor(private httpClient: HttpClient) {
    this.deptApiUrl="http://localhost:9999/depts";
  }

  getAll():Observable<Department[]>{
    return this.httpClient.get<Department[]>(this.deptApiUrl);
  }

  getById(id:number):Observable<Department>{
    return this.httpClient.get<Department>(`${this.deptApiUrl}/${id}`);
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
