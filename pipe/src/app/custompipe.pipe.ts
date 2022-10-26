import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {
value ='';
  transform(value: any, ...args: unknown[]): any {
    this.value = value.split('').reverse().join('');
    return this.value;
  }

}
