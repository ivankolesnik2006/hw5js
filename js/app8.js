let sixDigitNumber = parseInt(prompt("Enter a six-digit number:"));

if (!isNaN(sixDigitNumber) && sixDigitNumber === (sixDigitNumber | 0) && sixDigitNumber >= 100000 && sixDigitNumber <= 999999) {

    let firstThreeDigits = ((sixDigitNumber / 1000) % 1000) | 0;
    let lastThreeDigits = sixDigitNumber % 1000;

    let isMirrorNumber = firstThreeDigits === lastThreeDigits;

    alert(`Is the number mirror? ${isMirrorNumber}`);
} else {
    alert("Invalid input. Please enter a valid six-digit number.");
}
