import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './model/user';

@Injectable({
  providedIn: 'any'
})
export class AuthService {

  loginUrl: string;
  registerUrl: string;
  usersUrl:string;

  constructor(private http: HttpClient) {
    this.loginUrl=environment.signInUrl;
    this.registerUrl=environment.signUpUrl;
    this.usersUrl=environment.users;
  }

  signUp(user:User):Observable<string>{
    return this.http.post<any>(this.registerUrl,user)
    .pipe(
      map( jwt => this.storeToken(user.email,jwt) )      
    );
  }

  signIn(user:User):Observable<string>{
    return this.http.post<any>(this.loginUrl,user)
    .pipe(
      map(  jwt => this.storeToken(user.email,jwt) )      
    );
  }

  storeToken(email:string,jwt:any):string{
    let token = jwt.accessToken;
    sessionStorage.setItem("token","Bearer " + token);

    this.getUserByMail(email).subscribe(
      (usr) => sessionStorage.setItem("user",JSON.stringify(usr))
    );

    return token;
  }  

  getUserByMail(email:string):Observable<User>{
    return this.http.get<User[]>(`${this.usersUrl}?email=${email}`)
    .pipe(
      map(users => users.length>0?users[0]:null )
    );
  }

  isLoggedIn():boolean{
    let token = sessionStorage.getItem("token");
    return token!=null && token!=undefined;    
  }

  getCurrentUser():User {
    let usr:User=null;

    if(this.isLoggedIn){
      usr = JSON.parse(sessionStorage.getItem("user"));
    }

    return usr;
  }

  logout(){
    sessionStorage.clear();
  }
}
