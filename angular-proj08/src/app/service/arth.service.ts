import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArthService {

  constructor() { }

  sum(a:number,b:number):number {
    return a+b;
  }

  div(a:number,b:number):number{
    return a/b;
  }

  sumAll(numbers:number[]):Observable<number>{
    return new Observable<number>((observer:Observer<number>)=>{
        if(!numbers){
          observer.error("not an acceptable data");
        }
        let s =0,i=0;
        
        /*for(let i=0;i<numbers.length;i++){
            s+=numbers[i];
        }*/

        let handler = setInterval(()=>{
           s += numbers[i]; 
           i++;
           if(i==numbers.length){
              clearInterval(handler);
              observer.next(s);
              observer.complete();
           }
        },500);
    });
  }
}
