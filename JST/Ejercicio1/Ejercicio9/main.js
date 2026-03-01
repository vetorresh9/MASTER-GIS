
const enlaces = document.getElementsByTagName('a')
console.log('Numero de enlaces es: ', enlaces.length)

const penultimoEnlace = enlaces[enlaces.length-2].href
console.log(penultimoEnlace)

const tercerParrafo = document.getElementById('third-paragraph')
const numeroEnlacesTercerParrafo = 
  tercerParrafo.getElementsByTagName('a').length

const parrafoResultados = document.createElement('p')
const contenidoParrafoResultados = document.createTextNode()