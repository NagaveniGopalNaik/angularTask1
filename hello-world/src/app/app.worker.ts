

/// <reference lib="webworker" />
import { PrimeNumber } from './prime-number';
import { Factorial } from './factorial';


addEventListener('message', ({ data }) => {
  // const response = `worker response to ${data}`;
  const response = PrimeNumber.findNthPrimeNumber(parseInt(data[0]));
  const response1 = Factorial.findNthFactorial(parseInt(data[1]));
  postMessage([response,response1]);
  // postMessage(response);
});
