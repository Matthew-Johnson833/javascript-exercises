const reverseString = function(str) {
    const strArray = str.split("");
    const reversedArray = strArray.reverse();
    const string = reversedArray.join("");

    let newString = string.toString();
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
