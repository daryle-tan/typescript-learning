"use strict";
// Basic Types
let id = 5;
let company = "Tantainment";
let isPublished = true;
let x = "Aloha";
let ids = [1, 2, 3, 4, 5];
let arr = [1, "hi", false];
// Tuple
let person = [1, "dog", true];
// Tuple Array
let employee;
employee = [
    [1, "Tan"],
    [2, "Chui"],
    [3, "Boo"],
];
// Union
let pid;
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: "Goo",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
;
const user1 = {
    id: 1,
    name: "Boo",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Terr');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Heg', 'Developer');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['g', 'f', 'd', 's']);
// numArray.push('hello')
