let color =   prompt('color favorito')

let fondo = document.getElementById('fondo')

if(color == 'azul'){
    fondo.style.backgroundColor = 'blue'
    }
    else if (color == 'rojo') {
        fondo.style.backgroundColor = 'red'
    }
else {
    alert('color no valido')
}


