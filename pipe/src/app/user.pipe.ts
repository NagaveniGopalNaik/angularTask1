import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';
@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: User[]): any {
    return value.filter(user=>user.canFly);
  }

}

@Pipe({
  name: 'userImpure',
  pure:false
})
export class UserImpurePipe extends UserPipe {

  
}
