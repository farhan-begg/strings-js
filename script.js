// capitalize first letter only
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
const str = 'foo';
console.log(str.capitalize());

// make all character upper case
String.prototype.allCaps = function () {
    const splitStr = this.toUpperCase().split(' ');
    return splitStr.join(' ');
};

console.log('test another testing something'.allCaps());

// makes first character of each word capital
String.prototype.capitalizeWords = function () {
    const splitStr = this.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
};
console.log('test another testing something'.capitalizeWords());

// remove extra white space
// String.prototype.removeExtraSpaces = function () {
//     let orig = '   foo  1 ';
//     orig = orig.trim().split(' ')

//     return orig.join('')
// }
// console.log(removeExtraSpaces())

// // capitalize every other letter
// function capitalizeWords(input) {
//     for (i = 0; i < input.length; i += 2) {
//         input = input.substr(0, i) + input[i].toUpperCase() + input.substr(i + 1);
//     }
//     return input;
// }
// console.log(capitalizeWords('test'));

// convert string to kebab case
String.prototype.kebabCase = function (str) {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map((x) => x.toLowerCase())
        .join('-');
};
console.log(str.kebabCase('test another testing something'));

// convert string to camel case
String.prototype.snakeCase = function (str) {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map((x) => x.toLowerCase())
        .join('_');
};
console.log(str.snakeCase('test another testing something'));

// convert string to camel case
String.prototype.snakeCase = function (str) {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map((x) => x.toLowerCase())
        .join('_');
};
console.log(str.snakeCase('test another testing something'));

// convert to camel case
String.prototype.camelCase = function (str) {
    return str
        .replace(/\s(.)/g, ($1) => $1.toUpperCase())
        .replace(/\s/g, '')
        .replace(/^(.)/, ($1) => $1.toLowerCase());
};

console.log(str.camelCase('test another testing something'));

String.prototype.shiftl = function (str) {
    str = str.slice(1);

    return str;
};

console.log(str.shiftl('test another testing something'));

//
String.prototype.shiftString = function (str = '', step = 0) {
    const { length } = str;
    const index = step % length;
    const shift = index < 0 ? length + index : index;
    if (!str || length === 1 || !shift) {
        return str;
    }
    const reverseString = (str) => str.split('').reverse().join('');
    const newStr = reverseString(str);
    const s1 = newStr.slice(0, shift);
    const s2 = newStr.slice(shift);
    return reverseString(s1) + reverseString(s2);
};
// Right Shift
// StackDev
console.log(str.shiftString('StackDev', 3)); // evStackD
