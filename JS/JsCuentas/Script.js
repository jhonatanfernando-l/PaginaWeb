// Variable de incremento del número
let i = 1;

function Formulario() {
    // Obtención de los valores ingresados
    let Nom = document.getElementById("Nombre").value;
    let Con = document.getElementById("Contraseña").value;
    let Gen = document.querySelector('input[name="Genero"]:checked').value;
    let fec = document.getElementById("Fecha").value;
    let Num = document.getElementById("Numero").value;
    let Dir = document.getElementById("Direccion").value;
    let Ciu = document.getElementById("Departamento").value;

    //SECCION PREGUNTA SI PUEDE RECIBIR EL BONO
    let Bono = (Gen === "F") ? "SI" : "NO";

    //SECCION EL SUELDO SI ES DEL OCCIDENTE Bs.5500 O DEL VALLE Bs.5000 O ORIENTE Bs.5200
    /*OCCIDENTE = La Paz ,Oruro, Potosí*/
    /*VALLE = Cochabamba, Chuquisaca ,Tarija*/
    /*ORIENTE = SantaCruz, Beni, Pando*/

    let sueldo ;

    switch(Ciu){
        //OCCIDENTE
        case "LaPaz":
            sueldo = 5500;
            break;
        case "Oruro":
            sueldo = 5500;
            break;
        case "Potosi":
            sueldo = 5500;
            break;
        //VALLE
        case "Cochabamba":
            sueldo = 5000;
            break;
        case "Chuquisaca":
            sueldo = 5000;
            break;
        case "Tarija":
            sueldo = 5000;
            break;
        //ORIENTE
        case "SantaCruz":
            sueldo = 5200;
            break;
        case "Beni":
            sueldo = 5200;
            break;
        case "Pando":
            sueldo = 5200;
            break;
    }


    // Sección para imprimir los elementos en la tabla
    let mitabla = document.getElementById("tablaPagos");
    let fila = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col4 = document.createElement("td");
    let col5 = document.createElement("td");
    let col6 = document.createElement("td");
    let col7 = document.createElement("td");
    let col8 = document.createElement("td");
    let col9 = document.createElement("td");
    let col10 = document.createElement("td");

    col1.innerHTML = i++;
    col2.innerHTML = Nom;
    col3.innerHTML = Con;
    col4.innerHTML = Gen;
    col5.innerHTML = fec;
    col6.innerHTML = Num;
    col7.innerHTML = Ciu;
    col8.innerHTML = Dir;
    col9.innerHTML = Bono;
    col10.innerHTML = sueldo;

    // Agregar columnas a la fila
    fila.appendChild(col1);
    fila.appendChild(col2);
    fila.appendChild(col3);
    fila.appendChild(col4);
    fila.appendChild(col5);
    fila.appendChild(col6);
    fila.appendChild(col7);
    fila.appendChild(col8);
    fila.appendChild(col9);
    fila.appendChild(col10);

    // Agregar la fila a la tabla
    mitabla.appendChild(fila);
    }