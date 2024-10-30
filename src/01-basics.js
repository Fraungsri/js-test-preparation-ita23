/**
 * This function adds two numbers.
 *
 * @param {number} a - The first number to be added.
 * @param {number} b - The second number to be added.
 * @returns {number} - The sum of the two numbers.
 *
 * Usage:
 * const result = add(2, 3); // result will be 5
 * const anotherResult = add(-1, 1); // anotherResult will be 0
 */

const result = add;
function add(a, b) {
    return a + b;
}
console.log(result);

/**
 * This function returns the length of the provided string.
 *
 * @param {string} value - A string whose length needs to be determined.
 * @returns {number} - The length of the string.
 *
 * Usage:
 * const result = determineLength("Hello"); // result will be 5
 * const anotherResult = determineLength("AB"); // anotherResult will be 2
 */
let result1 = determineLength('Hello');

function determineLength(value){
const length = value.length;
return value.length;
}
console.log(length);

/**
 * This function concatenates two strings with a specified delimiter.
 *
 * @param {string} a - The first string.
 * @param {string} b - The second string.
 * @param {string} delimiter - The delimiter to be placed between the two strings.
 * @returns {string} - The concatenated string.
 *
 * Usage:
 * const result = concatenateWithDelimiter("Hello",  "World", ", "); // result will be "Hello, World"
 */

const result3 = concatenateWithDelimiter("Hello","World", " "," ");
function concatenateWithDelimiter(a, b, delimiter) {
return a + b + delimiter;
}
console.log(result3);