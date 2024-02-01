

let twoDigitNumber = parseInt(prompt("Enter a two-digit number:"));


if (twoDigitNumber >= 10 && twoDigitNumber <= 99) {
    let tens = (twoDigitNumber / 10);
    let units = twoDigitNumber % 10;

    if (tens > units) {
        alert('Digit in the tens place is greater than the digit in the units place ');
    } else if (tens < units) {
        alert('Digit in the units place is greater than the digit in the tens place ');
    } else {
        alert('The digits in the tens and units places are equal.');
    }
} else {
    alert('Invalid input. Please enter a two-digit number.');
}
