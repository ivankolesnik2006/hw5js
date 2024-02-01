
let threeDigitNumber = parseInt(prompt("Enter a three-digit number:"));


if (!isNaN(threeDigitNumber) && threeDigitNumber === (threeDigitNumber | 0) && threeDigitNumber >= 100 && threeDigitNumber <= 999) {
    let hundreds = (threeDigitNumber / 100) | 0;
    let tens = ((threeDigitNumber % 100) / 10) | 0;
    let units = threeDigitNumber % 10;

    let sumOfDigits = hundreds + tens + units;
    let isSumEven = sumOfDigits % 2 === 0;

    let isSumMultipleOfFive = sumOfDigits % 5 === 0;

    let productOfDigits = hundreds * tens * units;
    let isProductGreaterThan100 = productOfDigits > 100;

    alert(`Sum of digits: ${sumOfDigits}\n Is sum even? ${isSumEven}\n Is sum multiple of five? ${isSumMultipleOfFive}\n Is product of digits greater than 100? ${isProductGreaterThan100}`);
} else {
    alert("Invalid input. Please enter a valid three-digit number.");
}
