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
    if(listaDeMails.includes(usuario) == true){
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

// -----------------------------------------------------------------
                            //OBJETO PLATOS
// -----------------------------------------------------------------

var Carrito = []

function Comida (plato, precio, sector, codigo){
    this.plato = plato
    this.precio = precio
    this.sector = sector
    this.codigo = codigo
    this.buscadorDePlato = function(){
        console.log(this)
    }
}
// COMIDA MENU PIZZAS Y PASTAS
//-----------------------------------
var Menu1_1 = new Comida ('PIZZA DE MUZZARELLA INDIVIDUALES X3', '-$380-', 'MENU PIZZAS Y PASTAS', 'm1-p1') 
var Menu1_2 = new Comida ('TARTAS INDIVIDUALES', '-$210-', 'MENU PIZZAS Y PASTAS', 'm1-p2') 
var Menu1_3 = new Comida ('ÑOQUIS DE PAPA A LA BOLOGNESA', '-$260-', 'MENU PIZZAS Y PASTAS', 'm1-p3') 
var Menu1_4 = new Comida ('SORRENTINOS DE CALABAZA C/ SALSA ROSA', '-$260-', 'MENU PIZZAS Y PASTAS', 'm1-p4') 
var Menu1_5 = new Comida ('SORRENTINOSDE RICOTA JYQ C/ FILETO', '-$260-', 'MENU PIZZAS Y PASTAS', 'm1-p5') 

// COMIDA MENU CARNE
//-----------------------------------

var Menu2_1 = new Comida ('MILANESA DE LOMO NAPOLITANA C/ PAPINES', '-$300-', 'MENU CARNE', 'm2-p1')
var Menu2_2 = new Comida ('KID MILNESA C/PURÉ', '-$260-', 'MENU CARNE', 'm2-p2')  
var Menu2_3 = new Comida ('LOMO STROGONOFF C/ ARROZ', '-$370-', 'MENU CARNE', 'm2-p3')
var Menu2_4 = new Comida ('LOMO AL CHAMPIGNON C/ ARROZ AMARILLO', '-$390-', 'MENU CARNE', 'm2-p4')
var Menu2_5 = new Comida ('CARNE TIERNIZADA C/ PURE DE ZANAHORIA Y BATATA', '-$360-', 'MENU CARNE', 'm2-p5')  

// COMIDA MENU CERDO
//-----------------------------------

var Menu3_1 = new Comida ('BONDIOLA DESM C/MIEL, CERVEZA Y PAPAS', '-$400-', 'MENU CERDO', 'm3-p1')
var Menu3_2 = new Comida ('BBQ RIBS C/PURE DE BATATA', '-$450-', 'MENU CERDO', 'm3-p2')
var Menu3_3 = new Comida ('RIBS JACK DANIELS C/ PAPAS ESPECIALES', '-$490-', 'MENU CERDO', 'm3-p3')

// FUNCTION PIZZAS Y PASTAS
//-----------------------------------

Menu1_1.buscadorDePlato()
Menu1_2.buscadorDePlato()
Menu1_3.buscadorDePlato()
Menu1_4.buscadorDePlato()
Menu1_5.buscadorDePlato()

// FUNCTION CARNE
//-----------------------------------

Menu2_1.buscadorDePlato()
Menu2_2.buscadorDePlato()
Menu2_3.buscadorDePlato()
Menu2_4.buscadorDePlato()
Menu2_5.buscadorDePlato()

// FUNCTION CERDO
//-----------------------------------

Menu3_1.buscadorDePlato()
Menu3_2.buscadorDePlato()
Menu3_3.buscadorDePlato()
