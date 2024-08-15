const moment = require("moment");

/**
 * Adds two numbers together.
 *
 * @param {number} a
 * @param {number} b - The second number to add.
 * @returns {number} The sum of the two numbers.
 * @throws {TypeError} Will throw an error if the arguments are not numbers.
 */
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }
    moment.now()
    return a + b;
}

// Example usage (this should be fine):
console.log(add(2, 3)); // 5

// Example usage (this will cause an error):
console.log(add('2', 3)); // Uncaught TypeError: Both arguments must be numbers
