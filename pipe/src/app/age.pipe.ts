import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value:any): any {
  if(value){
    let today :any= new Date().getFullYear();
  let dob :any= new Date(value).getFullYear();
  
  let newage = today - dob;
    return newage;
  } else{
    return ;
  }
  }

}
