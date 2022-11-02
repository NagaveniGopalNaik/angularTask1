import { Component } from '@angular/core';
import { PrimeNumber } from './prime-number';
import { Factorial } from './factorial';
//component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular project';
  value=0;
  val = 0;
  val2:number=0;
  fact=0;
  function(){
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./app.worker', import.meta.url));
     
     
      worker.onmessage = ({ data }) => {
        console.log(data);
        
        this.value= data[0];
        this.fact = data[1];
        // console.log(`page got message: ${data}`);
      };
      worker.postMessage([this.val2,this.val]);
      
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
  // getPrimeNumber(){
  //   this.value = PrimeNumber.findNthPrimeNumber(8980);
  // }
}


