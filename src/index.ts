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
