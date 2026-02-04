const dni = prompt('Tu DNI')

console.log(dni)

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (dni < 0 || dni > 99999999){
    alert('El numero de tu DNI es incorrecto')
}else{
    const letraseleccionada = letras[dni%23]
    alert('Tu letra del DNI es: ' + letraseleccionada)
}
