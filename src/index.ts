// Basic Types
let id: number = 5;
let company: string = "Tantainment";
let isPublished: boolean = true;
let x: any = "Aloha";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, "hi", false];
// Tuple
let person: [number, string, boolean] = [1, "dog", true];
// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Tan"],
  [2, "Chui"],
  [3, "Boo"],
];
// Union
let pid: string | number;
pid = 22;

// Enum
enum Direction1 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Goo",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}
// Void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces (cant use interface with primitives or unions)
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number
};

const user1: UserInterface = {
  id: 1,
  name: "Boo",
};

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number;
  name: string;
  register(): string
};

// Classes
class Person implements PersonInterface{
   id: number
   name: string

  constructor(id: number, name: string) {
   this.id = id
   this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Terr')

class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Heg', 'Developer')

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['g','f','d','s'])

// numArray.push('hello')