const divTablero = document.querySelector("#tablero");

function boton() {
    let inputFila = parseInt(document.querySelector("#fila").value);
    let inputColumna = parseInt(document.querySelector("#columna").value);

    divTablero.innerHTML = ``;
    for (let fila = 0; fila < inputFila; fila++) {
        divTablero.innerHTML += `
        <div class="row">
            ${agregarColumna(inputColumna, fila)}
        </div>`;
    }
}

function agregarColumna(numColumnas, fila) {
    let columnas = "";

    for (let columna = 0; columna < numColumnas; columna++) {
        let classColumna;
        
        if ((fila + columna) % 2 === 0) {
            classColumna = `negro`;
        } else {
            classColumna = `blanco`;
        }

        columnas += `<div class="col casilla ${classColumna}">
        </div>`;
    }
    return columnas;
}
