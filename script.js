// capitalize first letter only
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
}
let str = 'foo'
console.log(str.capitalize())



// make all character upper case
String.prototype.allCaps = function (str) {
    let splitStr = str.toUpperCase().split(' ');
    return splitStr.join(' ');
}
console.log(str.allCaps('test another testing something'))



// makes first character of each word capital
String.prototype.capitalizeWords = function (str) {
    let splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}
console.log(str.capitalizeWords('test another testing something'))



// remove extra white space
function removeExtraSpaces() {
    let orig = '   foo  1 ';
    orig = orig.trim().split(' ')

    return orig.join('')
}
console.log(removeExtraSpaces())



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
        .map(x => x.toLowerCase())
        .join('-');

}
console.log(str.kebabCase('test another testing something'))

