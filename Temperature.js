function pedirTemperatura() {
    let entrada = prompt("Por favor, ingrese la temperatura en grados Celsius:");

    let celsius = Number(entrada);

    if (isNaN(celsius)) {
        console.log("Entrada inválida. Por favor, ingrese un número válido para la temperatura en grados Celsius.");
        return pedirTemperatura();
    }

    let kelvin = celsius + 273.15;
    let fahrenheit = (celsius * 9 / 5) + 32;

    console.log("Grados Kelvin: " + kelvin.toFixed(2));
    console.log("Grados Fahrenheit: " + fahrenheit.toFixed(2));
}

pedirTemperatura(); 