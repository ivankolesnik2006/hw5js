let threeDigitNumber = parseInt(prompt("Enter a three-digit number:"));

if (!isNaN(threeDigitNumber) && threeDigitNumber === (threeDigitNumber | 0) && threeDigitNumber >= 100 && threeDigitNumber <= 999) {
    let units = threeDigitNumber % 10;
    let tens = (threeDigitNumber % 100) / 10 | 0;
    let hundreds = threeDigitNumber / 100 | 0;

    let areAllDigitsEqual = units === tens && tens === hundreds;

    let hasEqualDigits = units === tens || tens === hundreds || units === hundreds;

    alert(`Are all digits equal? ${areAllDigitsEqual}\n Are there equal digits among them? ${hasEqualDigits}`);
} else {
    alert("Invalid input. Please enter a valid three-digit number.");
}