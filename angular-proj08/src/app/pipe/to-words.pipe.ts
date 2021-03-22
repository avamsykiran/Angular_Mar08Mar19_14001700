import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toWords'
})
export class ToWordsPipe implements PipeTransform {

  digits : string[];

  constructor(){
    this.digits=[
      "ZERO ","ONE ","TWO ","THREE ","FOUR ","FIVE ","SIX ",
      "SEVEN ","EIGHT ","NINE "];
  }

  transform(value: number): string {
    let result="";
    
    let strValue = `${value}`;

    for(let i=0;i<strValue.length;i++){
      let d = parseInt(strValue.charAt(i));
      result += this.digits[d];
    }
    
    return result;
  }

}
