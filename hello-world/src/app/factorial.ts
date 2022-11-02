export class Factorial {
    static findNthFactorial(num:number):any{
        let factorial = 1;
        if(num == 1){
            return 1;
        }
        else if (num < 1){
            return "not valid input";
        }
        else {
            for(let val = num;val>=1;val--){
                
                factorial *=val;
            }
        }
        return factorial;

    }
}
