import Fibconst, { fib } from './fib';

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
