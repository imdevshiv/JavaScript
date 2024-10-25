// DataType in JavaScript
/**What is Data Type
 * Ans :- Data Type means the type(kind) of data a variable store
 *
 * What are the Data Type available in Javascript?
 * Ans :- There are two of data in JavaScript
 *          i-Primitive data type
 *         ii-Non-Primitive data type
 *
 * We can classify primitive data-type in 7 type
 *      1. number
 *      2. string
 *      3. boolean
 *      4. undefined
 *      5. null
 *      6. bigint
 *      7. symbol {a Symbol is a unique and immutable primitive data type introduced in ECMAScript 2015 (ES6).
 *                  Symbols are primarily used to create unique property keys for objects,
 *                      allowing for the creation of private or hidden properties.}
 *
 * we can know the data of a value by using typeof operator
 * it gives us a string indicating the type of variable or expression
 */
// debugger; keywords helps to debug code
x = 25;
y = "Shiv";
z = false;

result = typeof x; // result will store in string with the type of data in x
console.log(result); // output: number

console.log(typeof result); //output: string

console.log(typeof 54); //output: number

console.log(typeof undefined); //output: undefined

console.log(typeof z); //output: boolean

console.log(typeof y); //output: string

console.log(typeof NaN); //output: number

console.log(typeof null); //output: object {historical bug }

console.log(typeof 1n); //output: bigint {It was introduced in ECMAScript 2020 (ES11)}

console.log(+false); //output: 0

console.log(+true); //output: 1

// +"String" Type coercion :- is the process by which the language automatically converts values
// from one type to another when performing operations.

console.log(+"25s"); //output:NaN
console.log(+"13"); //output:13 number
console.log(13 + "13"); //output:1313 String
console.log(13 + +"13"); //output:26 number
console.log(+"13" + +"13"); //output:26 number
console.log(+"13" + 13); //output:26 number
console.log("13" - 13); //output:0 number   Type coercion

console.log(parseInt("25225shiv")); //output:25225 number
console.log(parseInt("s25")); //output:NaN
