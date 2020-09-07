var listadoDeNombre = []
var listaDeMails= []
var listaDeContraseñas = []
// -----------------------------------------------------------------
                            //BOTON QUIERO
// -----------------------------------------------------------------
function botonCompras(){
    usuario = prompt ('Ingresar con tu Mail')
    for(i=0; i < listaDeMails.length; i++){
        if (usuario == listaDeMails[i])
        var nombre = i
    }
    if(listaDeMails.includes(usuario) == true ){
        password = prompt ('Usted ya es un USUARIO Registrado introduzca su Contraseña.')
        alert ('Bienvenido ' +listadoDeNombre[nombre] + ' ya esta todo listo para realizar su compra.' )
    } else{
        alert ('PARA ESTO, USTED SE TIENE QUE REGISTRAR, DIRIJASE AL CARRITO PARA COMPLETAR LOS DATOS.') 
    }      
}

function buscarCuenta(){
    var lookUsuario = prompt ('Si no sos Usuario escriba "Nuevo" y si ya tienes usuario escriba "Usuario".')
    function signIn(usuNuevo){
        if (usuNuevo === "Nuevo"){
            nombreApellido = prompt ('Ingrese su Nombre y Apellido.')
            nuevoMail = prompt ('Le solicitamos que ingrese el Nuevo Mail.')
            nuevaContraseña = prompt ('Ingrese una nueva contraseña.')
            listaDeMails.push(nuevoMail)
            listaDeContraseñas.push(nuevaContraseña)
            listadoDeNombre.push(nombreApellido)
            alert ('Bienvenido ' + nombreApellido + ' ' + 'Le estaremos mandando una mail confirmando su cuenta nueva.')
        }
        else if (usuNuevo === 'Usuario'){
            return botonCompras ()
        }
        else {
            alert ('Verificar Mayuscula o Ortografia')
        }
    }
    signIn(lookUsuario)

}