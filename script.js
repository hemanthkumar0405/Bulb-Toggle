function turnOn() {
    let color = prompt("Enter bulb color:");
    if (color) {
        document.getElementById("bulb").style.backgroundColor = color;
    }
}

function turnOff() {
    document.getElementById("bulb").style.backgroundColor = "white";
}
