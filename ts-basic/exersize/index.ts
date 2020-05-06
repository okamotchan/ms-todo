import Fibconst, { fib } from './fib';
import { Stack } from './stack';
// fibonacchi
console.log(fib(Fibconst))

// type & interface
type TraficLight = 'red' | 'green' | 'yellow'

interface Car {
  wheels: number;
  color: string;
  make: string;
  model: string;
}

const myCar: Car = {
  wheels: 5,
  color: 'red',
  make: 'toyota',
  model: 'prius'
}

console.log('mycar:', JSON.stringify(myCar))

export {};

// generics　https://typescript-jp.gitbook.io/deep-dive/type-system/generics#jenerikusugenerics
const myStack = new Stack<number>();
myStack.push(1);
myStack.push(2);
console.log('Number on top of the stack:', myStack.pop());
