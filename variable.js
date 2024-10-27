// Variable in JavaScript
// Variable is just like a container which store data in it
//  variable Declaration in JavaScript
/** In JavaScript let,const and var are used to declare a variable
 * we can declare a variable in Js without using let const and var .
 * It is good to use let const var for code readability and to define the scope of a variable .
 *
 * Let's discuss let const and var in detail
 *
 * **VAR**:-
 *            i. Function Scope
 *           ii. Hoisted(meaning we can use the variable before declaration)
 *          iii. can be re-declared
 *           iv. can be updated
 *
 * **LET**:-
 *            i. Block Scope
 *           ii. Not Hoisted(meaning we can use the variable before declaration)
 *          iii. can't be re-declared
 *           iv. can be updated (mutable)
 *
 *
 * **CONST**:-
 *            i. Block Scope
 *           ii. Not Hoisted(meaning we can use the variable before declaration)
 *          iii. can't be re-declared
 *           iv. can't be updated (immutable)
 *
 * **BEST PRACTICES**
 *      ->Use const for immutable variable
 *      ->Use let for mutable variable
 *      ->Avoid using var unless necessary for legacy browser
 *
 *           **TDZ(Temporal Dead Zone)**
 *                 The area between the start of a block till the declaration is known as Temporal Dead Zone (TDZ).
 *                  In this area variable declared with let and const can't be accessible
 *
 *      * Hoisting *
 *         JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of
 *             functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
 *        imp. Hoisting is not a term normatively defined in the ECMAScript specification.
 *
 *
 *      *Scope *
 *      Function Scope:- var is function scope which means we can't access var variable outside a function
 *
 *      block scope :- meaning the variable declare inside a block if() for while outside of this block we cant assess this variable
 *
 *      scope help in encapsulation
 *
 */

// var example
// debugger;
console.log(a); //output: undefined
var a = 21;

// const example
// console.log(x); //Error :- ReferenceError: Cannot access 'x' before initialization
const x = 10;
console.log(x); //output: 10
// x = 20; //Error :-TypeError: Assignment to constant variable.

// let example
// console.log(y);//Error :- ReferenceError: Cannot access 'x' before initialization
let y = 10;
console.log(y);
y = 20;
console.log(y);

//block scope
{
  let b = 5;
  console.log(b);
  const c = 6;
  console.log(c);
  b = 7;
  //   c=8 //Error:- Assignment to constant variable.
  console.log(b);
  console.log(c);
}
// console.log(b); ReferenceError: b is not defined
