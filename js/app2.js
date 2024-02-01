let distanceInKilometers = parseFloat(prompt("Enter distance in kilometers"));
let distanceInFeet = parseFloat(prompt("Enter distance in feet"));

let distanceInKilometersFromFeet = distanceInFeet * 0.305 / 1000; 


if (distanceInKilometers < distanceInKilometersFromFeet) {
    alert('Distance in km is less than distance in ft');
} else if (distanceInKilometers > distanceInKilometersFromFeet) {
    alert('Distance in km from ft is less than distance in km');
} else {
    alert('Distance in km is equal to distance in ft');
}