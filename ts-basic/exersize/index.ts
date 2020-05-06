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

// spread, https://typescript-jp.gitbook.io/deep-dive/future-javascript/spread-operator#yao-yue
//destructuring, https://typescript-jp.gitbook.io/deep-dive/future-javascript/destructuring#yao-yue
const obj1 = {
  first: 'who',
  second: 'what',
}

const obj2 = {
  center: 'because',
  catcher: 'today'
}

const megaObj = { ...obj1, ...obj2}

const { first, second, catcher } = megaObj
console.log('first', first)
console.log('second', second)
console.log('catcher', catcher)

// async / await https://jsprimer.net/basic/async/#async-handling
function makePromise(): Promise<number> {
  return Promise.resolve(5)
}

async function run() {
  const result = await makePromise();
  console.log('makePromise returned:', result);
}

run();

// 8
// mycar: {"wheels":5,"color":"red","make":"toyota","model":"prius"}
// Number on top of the stack: 2
// first who
// second what
// catcher today
// makePromise returned: 5
