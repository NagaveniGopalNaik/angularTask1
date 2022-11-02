export class PrimeNumber {


    static isPrimeNumber(num:number) : boolean{
      if(num == 1) return true;
  
      // let idx = 2;
      for(let idx = 2;idx < num/2;idx++){
        if(num  % idx == 0){
          return false;
        }
        
      }
      // console.log(num);
      return true;
    }
  
    static findNthPrimeNumber(num:number):number{
      let start=1;
      let count = 0;
  
      while(count < num){
        if(this.isPrimeNumber(start)){
          count++;
          
        }
        start++;
        console.log(start);
        
        
      }
      return start-1;
  
    }
  
}
