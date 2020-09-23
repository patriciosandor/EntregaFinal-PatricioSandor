
// // -----------------------------------------------------------------
// // -----------------------------------------------------------------
// //                            OBJETO
// // -----------------------------------------------------------------
// // -----------------------------------------------------------------

// //                            EJEMPLO 1
// // -----------------------------------------------------------------

const nuevoUsuario = []
function crearUsuario(nombre, mail, contraseña) {
    this.nombre = nombre
    this.mail = mail
    this.contraseña = contraseña
}
var nombreApellido
var nuevoMail
var nuevoContraseña
var usuario

// function buscarCuenta(){
//     var lookUsuario = prompt('Si no sos Usuario escriba "Nuevo" y si ya tienes usuario escriba "Usuario".')
//     if (lookUsuario === "Nuevo") {
//             nombreApellido = prompt('Ingrese su Nombre y Apellido.')
//             nuevoMail = prompt('Le solicitamos que ingrese el Nuevo Mail.')
//             nuevaContraseña = prompt('Ingrese una nueva contraseña.')
//             alert('Bienvenido ' + nombreApellido + ' ' + 'Le estaremos mandando una mail confirmando su cuenta nueva.')
//         }

//     else if (lookUsuario === 'Usuario'){
//         return botonCompras ()
//     }
//     else {
//         alert ('Verificar Mayuscula o Ortografia')
//     }
//         var usuario = new crearUsuario(nombreApellido, nuevoMail, nuevaContraseña)
//         nuevoUsuario.push(usuario)
// }

// function botonCompras(){
//     mailUsuario = prompt ('Ingresar con tu Mail')
//     if(mailUsuario === nuevoUsuario.mail){
//         password = prompt ('Usted ya es un USUARIO Registrado introduzca su Contraseña.')
//     }
//     else{
//         alert ('PARA ESTO, USTED SE TIENE QUE REGISTRAR, DIRIJASE AL CARRITO PARA COMPLETAR LOS DATOS.') 
//     }
// }

// function botonCompras(){

//    //*SIGN IN LOG IN CON PROMPT

//     mailUsuario = prompt ('Ingresar con tu Mail')
    
//     var resultado = nuevoUsuario.find(producto => producto.mail == mailUsuario)

//     if(resultado){
//         password = prompt ('Usted ya es un USUARIO Registrado introduzca su Contraseña.')
        
//         var resultado2 = nuevoUsuario.find(producto2 => producto2.contraseña == password)

//         // for(i=0; i < nuevoUsuario.length; i++){
                
//         //     if(resultado2){
//         //         alert (`Hola ${nuevoUsuario[i].nombre} binvendio ygracias por confiar en nostros`)
//         //         //VER COMO CAMBIAR ESTO Y LLAMAR BIEN EL OBJETO
//         //     }
//         //     else{
//         //         alert('Tu contraseña es ERRONEA')         
//         //     }
//         // }

//                     if(resultado2){
//                 alert (`Hola ${nombreApellido} binvendio ygracias por confiar en nostros`)
//                 //VER COMO CAMBIAR ESTO Y LLAMAR BIEN EL OBJETO
//             }
//             else{
//                 alert('Tu contraseña es ERRONEA')         
//             }

//     }
//     else{
//         alert ('PARA ESTO, USTED SE TIENE QUE REGISTRAR, DIRIJASE AL CARRITO PARA COMPLETAR LOS DATOS.') 
//     }

// }

// //                            EJEMPLO 2
// // -----------------------------------------------------------------

// function buscarCuenta(){
//     var usuNuevo = prompt ('Si no sos Usuario escriba "Nuevo" y si ya tienes usuario escriba "Usuario".')
//         if (usuNuevo === "Nuevo"){
//             nombreApellido = prompt ('Ingrese su Nombre y Apellido.')
//             nuevoMail = prompt ('Le solicitamos que ingrese el Nuevo Mail.')
//             nuevaContraseña = prompt ('Ingrese una nueva contraseña.')
//             alert ('Bienvenido ' + nombreApellido + ' ' + 'Le estaremos mandando una mail confirmando su cuenta nueva.')

//             function crearUsuario(nombre, mail, contraseña){
//                 this.nombre = nombre
//                 this.mail= mail
//                 this.contraseña = contraseña
//             } 

//             var usuario = new crearUsuario (nombreApellido , nuevoMail, nuevaContraseña )
//             nuevoUsuario.push(usuario)

//         }

//         else if (usuNuevo === 'Usuario'){
//             return botonCompras ()
//         }
//         else {
//             alert ('Verificar Mayuscula o Ortografia')
//         }
// } 

// function botonCompras(){
//     usuario = prompt ('Ingresar con tu Mail')
//     for(i=0; i < nuevoUsuario.length; i++){
//         if (usuario == nuevoUsuario[i])
//         var nombre = i
//     }

//     if(nuevoUsuario.includes(usuario) == true){
//         password = prompt ('Usted ya es un USUARIO Registrado introduzca su Contraseña.')
//             // alert ('Bienvenido ' + listadoDeNombre[nombre] + ' ya esta todo listo para realizar su compra.' )
        
//         if((nuevoUsuario.includes(usuario)) && (nuevoUsuario.includes(password))){
//             alert ('Bienvenido ' + nuevoUsuario[nombre] + ' ya esta todo listo para realizar su compra.' )
//         }
        
//         else{
//             alert('Tu contraseña es ERRONEA')
//         }

//     } else{
//         alert ('PARA ESTO, USTED SE TIENE QUE REGISTRAR, DIRIJASE AL CARRITO PARA COMPLETAR LOS DATOS.') 
//     }
// }
    
    

// // -----------------------------------------------------------------
// // -----------------------------------------------------------------
// //                            EJEMPLO PRIMERA ENR
// // -----------------------------------------------------------------
// // -----------------------------------------------------------------


// const nuevoUsuario = {
//     listadoDeNombre : [],
//     listaDeMails : [],
//     listaDeContraseñas : []
// }

// // -----------------------------------------------------------------
// //                             BOTON QUIERO
// // -----------------------------------------------------------------
// function botonCompras(){
//     usuario = prompt ('Ingresar con tu Mail')
//     for(i=0; i < nuevoUsuario.listaDeMails.length; i++){
//         if (usuario == nuevoUsuario.listaDeMails[i])
//         var nombre = i
//     }

//     if(nuevoUsuario.listaDeMails.includes(usuario) == true){
//         password = prompt ('Usted ya es un USUARIO Registrado introduzca su Contraseña.')
//             // alert ('Bienvenido ' + listadoDeNombre[nombre] + ' ya esta todo listo para realizar su compra.' )
        
//         if((nuevoUsuario.listaDeMails.includes(usuario)) && (nuevoUsuario.listaDeContraseñas.includes(password))){
//             alert ('Bienvenido ' + nuevoUsuario.listadoDeNombre[nombre] + ' ya esta todo listo para realizar su compra.' )
//         }
        
//         else{
//             alert('Tu contraseña es ERRONEA')
//         }

//     } else{
//         alert ('PARA ESTO, USTED SE TIENE QUE REGISTRAR, DIRIJASE AL CARRITO PARA COMPLETAR LOS DATOS.') 
//     }
// }
// function buscarCuenta(){
//     var lookUsuario = prompt ('Si no sos Usuario escriba "Nuevo" y si ya tienes usuario escriba "Usuario".')
//     function signIn(usuNuevo){
//         if (usuNuevo === "Nuevo"){
//             nombreApellido = prompt ('Ingrese su Nombre y Apellido.')
//             nuevoMail = prompt ('Le solicitamos que ingrese el Nuevo Mail.')
//             nuevaContraseña = prompt ('Ingrese una nueva contraseña.')
//             nuevoUsuario.listaDeMails.push(nuevoMail)
//             nuevoUsuario.listaDeContraseñas.push(nuevaContraseña)
//             nuevoUsuario.listadoDeNombre.push(nombreApellido)
//             alert ('Bienvenido ' + nombreApellido + ' ' + 'Le estaremos mandando una mail confirmando su cuenta nueva.')
//         }
//         else if (usuNuevo === 'Usuario'){
//             return botonCompras ()
//         }
//         else {
//             alert ('Verificar Mayuscula o Ortografia')
//         }
//     }
//     signIn(lookUsuario)

// }


// // -----------------------------------------------------------------
// //                             OBJETO PLATOS
// // -----------------------------------------------------------------

var carrito = []

function Comida (plato, precio, sector, codigo, cantidad){
    this.plato = plato
    this.precio = precio
    this.sector = sector
    this.codigo = codigo
    this.cantidad = cantidad
    this.buscadorDePlato = function (){
        var resultado = carrito.find(producto => producto.plato == plato)
        if (resultado){

            resultado.cantidad++
        }
        else{
            const productoCarrito = {
                plato : plato,
                precio : precio,
                sector : sector,
                codigo : codigo,
                cantidad : 1
    
            }
            carrito.push(productoCarrito)
        }
    }
}
// COMIDA MENU PIZZAS Y PASTAS
//-----------------------------------
var Menu1_1 = new Comida ('PIZZA DE MUZZARELLA INDIVIDUALES X3', '-$380-', 'MENU PIZZAS Y PASTAS', 'm1-p1', 0) 
var Menu1_2 = new Comida ('TARTAS INDIVIDUALES', '-$210-', 'MENU PIZZAS Y PASTAS', 'm1-p2', 0) 
var Menu1_3 = new Comida ('ÑOQUIS DE PAPA A LA BOLOGNESA', '-$260-', 'MENU PIZZAS Y PASTAS', 'm1-p3', 0) 
var Menu1_4 = new Comida ('SORRENTINOS DE CALABAZA C/ SALSA ROSA', '-$260-', 'MENU PIZZAS Y PASTAS', 'm1-p4', 0) 
var Menu1_5 = new Comida ('SORRENTINOSDE RICOTA JYQ C/ FILETO', '-$260-', 'MENU PIZZAS Y PASTAS', 'm1-p5', 0) 

// COMIDA MENU CARNE
//-----------------------------------

var Menu2_1 = new Comida ('MILANESA DE LOMO NAPOLITANA C/ PAPINES', '-$300-', 'MENU CARNE', 'm2-p1', 0)
var Menu2_2 = new Comida ('KID MILNESA C/PURÉ', '-$260-', 'MENU CARNE', 'm2-p2', 0)  
var Menu2_3 = new Comida ('LOMO STROGONOFF C/ ARROZ', '-$370-', 'MENU CARNE', 'm2-p3', 0)
var Menu2_4 = new Comida ('LOMO AL CHAMPIGNON C/ ARROZ AMARILLO', '-$390-', 'MENU CARNE', 'm2-p4', 0)
var Menu2_5 = new Comida ('CARNE TIERNIZADA C/ PURE DE ZANAHORIA Y BATATA', '-$360-', 'MENU CARNE', 'm2-p5', 0)  

// COMIDA MENU CERDO
//-----------------------------------

var Menu3_1 = new Comida ('BONDIOLA DESM C/MIEL, CERVEZA Y PAPAS', '-$400-', 'MENU CERDO', 'm3-p1', 0)
var Menu3_2 = new Comida ('BBQ RIBS C/PURE DE BATATA', '-$450-', 'MENU CERDO', 'm3-p2', 0)
var Menu3_3 = new Comida ('RIBS JACK DANIELS C/ PAPAS ESPECIALES', '-$490-', 'MENU CERDO', 'm3-p3', 0)

// COMIDA MENU POLLO
//-----------------------------------

var Menu4_1 = new Comida ('BASTONES DE POLLO C/ SALSA BBQ X 6un', '-$250-', 'MENU POLLO', 'm4-p1', 0)
var Menu4_2 = new Comida ('POLLO AL DIJON C/ PURE DE CALABAZA', '-$300-', 'MENU POLLO', 'm4-p2', 0)
var Menu4_3 = new Comida ('POLLO AL VERDEO C/ PAPAS RÚSTICAS', '-$300-', 'MENU POLLO', 'm4-p3', 0)

// COMIDA MENU ESTACION 
//-----------------------------------

var Menu5_1 = new Comida ('GUISO DE LENTEJA CASERO', '-$350-', 'MENU ESTACION', 'm5-p1', 0)
var Menu5_2 = new Comida ('LOCRO CASERO', '-$350-', 'MENU ESTACION', 'm5-p2', 0)
var Menu5_3 = new Comida ('TORTILLA DE PAPA XL', '-$300-', 'MENU ESTACION', 'm5-p3', 0)
var Menu5_4 = new Comida ('RISOTO DE MARISCOS', '-$400-', 'MENU ESTACION', 'm5-p4', 0)

// COMIDA MENU SALUDABLE
//-----------------------------------

var Menu6_1 = new Comida ('TARTA INTEGRAL DE VEGETALES', '-$260-', 'MENU SALUDABLE', 'm6-p1', 0)
var Menu6_2 = new Comida ('TARTA INTEGRAL CAPRESSE', '-$260-', 'MENU SALUDABLE', 'm6-p2', 0)
var Menu6_3 = new Comida ('WOK VEGETALES Y POLLO', '-$320-', 'MENU SALUDABLE', 'm6-p3', 0)
var Menu6_4 = new Comida ('PECHUGA AL VACIO C/ ARROZ YAMANI Y VEGETALES', '-$350-', 'MENU SALUDABLE', 'm6-p4', 0)
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

// FUNCTION POLLO
//-----------------------------------

Menu4_1.buscadorDePlato()
Menu4_2.buscadorDePlato()
Menu4_3.buscadorDePlato()

// FUNCTION ESTACION
//-----------------------------------

Menu5_1.buscadorDePlato()
Menu5_2.buscadorDePlato()
Menu5_3.buscadorDePlato()
Menu5_4.buscadorDePlato()


// FUNCTION SALUDABLE
//-----------------------------------

Menu6_1.buscadorDePlato()
Menu6_2.buscadorDePlato()
Menu6_3.buscadorDePlato()
Menu6_4.buscadorDePlato()


