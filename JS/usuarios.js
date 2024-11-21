const usuarios = [
    { usuarios: 'juan', contraseña: '1234'},
    { usuario: 'maria', contraseña: '22222'},
];

function inicioSesion(){
    let usu = document.getElementById('usu').value;
    let contra = document.getElementById('contra').value;

    /*metodo fin =  */

    let verifica = !!usuarios.find(e=>e.usuario===usu && e.contraseña===contra);

    if(verifica){
        alert("Usuario Correcto...")

       
        window.open("PAGES/ventas.html");
    }else{
        alert("Usuario o contraseña Incorrectos...");
    }
}