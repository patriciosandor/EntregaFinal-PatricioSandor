
//---------------------------------------
        // SECTOR MENUS DE PLATOS
//---------------------------------------

// RENDERIZDOR DE PORDUCTOS
//---------------------------------------
var carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];


let $clasePizzaPastas = document.querySelector('#clasePizzaPastas')
let $claseCarne = document.querySelector('#claseCarne')
let $claseCerdo = document.querySelector('#claseCerdo')
let $clasePollo = document.querySelector('#clasePollo')
let $claseEstacion = document.querySelector('#claseEstacion')
let $claseSaludabe = document.querySelector('#claseSaludable')


function renderBaseDeDatos(){
    baseDatos.forEach(function(producto){

        var miNodo = document.createElement('div')
        miNodo.classList.add('sectionM__article__div__div')
        miNodo.innerHTML += `
        <div class="sectionM__article__div__div__div" style="height:60rem">
            <div class="sectionM__article__div__div__div__div-foto-m">
                <img src="${producto.img}" alt="...">
            </div>
            <div class="sectionM__article__div__div__div__div-texto-m">
                <h2 class="sectionM__article__div__div__div__div-texto-m__h2">${producto.nombre}</h2>
                <p class="sectionM__article__div__div__div__div-texto-m__p">-${producto.precio}-</p>
                <div class="sectionM__article__div__div__div__div-texto-m__div">
                    <a onclick="sumarCarrito(${baseDatos.indexOf(producto)})">QUIERO!!!!</a>
                </div>
            </div>
        </div>
        `
    

            if ((producto.codigo) < 2){
                $clasePizzaPastas.appendChild(miNodo)
            }
            else if ((producto.codigo < 3) && (producto.codigo >= 2)){
                $claseCarne.appendChild(miNodo)
            }
            else if ((producto.codigo < 4) && (producto.codigo >= 3)){
                $claseCerdo.appendChild(miNodo)
            }
            else if ((producto.codigo < 5) && (producto.codigo >= 4)){
                $clasePollo.appendChild(miNodo)
            }
            else if ((producto.codigo < 6) && (producto.codigo >= 5)){
                $claseEstacion.appendChild(miNodo)
            }
            else{
                $claseSaludabe.appendChild(miNodo)
            } 
    }) 

}

// RENDERIZDOR DE CARRITO
// ---------------------------------------
// let carrito = [] 
let total = 0
let $contenedro = document.querySelector('#aqui')


var carritoCompras = $('#carritoMercado').click (function(){
    $('.sectionM__sidebar').toggleClass("cerrar")
})

var carritoCompras2 = $('#cerrarSide').on('click', function(){
    $('.sectionM__sidebar').toggleClass("cerrar")
})


function sumarCarrito(index) {
    $('.sectionM__sidebar').addClass("cerrar")
    
    var producto = baseDatos[index]
    if (carrito.length > 0) {
        var noExiste = true;
        for (var i = 0; i < carrito.length; i++) {
            if (producto.nombre === carrito[i].nombre) {
            carrito[i].cantidad++;
            noExiste = false;
            }
        }
        if (noExiste) {
            producto.cantidad = 1
            carrito.push(producto)
        }
    } 
    else {
        producto.cantidad = 1
        carrito.push(producto)
    }
    renderCarrito()
    sumadordePrecios()
    localStorage.carrito = JSON.stringify(carrito)
}


function renderCarrito(){
    localStorage.carrito = JSON.stringify(carrito)
    $contenedro.innerHTML = "";
    if(carrito.length>0){
        carrito.forEach(element => {
            $contenedro.innerHTML +=`
            <div class="sectionM__sidebar__div__div d-flex align-items-center d-flex  justify-content-around h-100 border-bottom pb-2 pt-3 row">
                <img href="hola" src="${element.img}" class="img-fluid col-3">
                <div class="sectionM__sidebar__div__div__texto col-5">
                    <h4 class="sectionM__sidebar__div__div__texto__titulo text-truncate text-center">${element.nombre}</h4>
                </div>
                <div class="sectionM__sidebar__div__div__precio col-2">
                    <h4 id="monto" class="align-self-sm-center"> <span>-$</span>${(element.precio) * (element.cantidad)} <span>-</span></h4>
                </div>
                <p class="sectionM__sidebar__div__div__total col-1" name="${carrito.indexOf(element)}>Total: $<span id="totalCode">${element.cantidad}</span></p>
                <button class=" col-1 btn btn-danger botoneta" id="${(element.codigo)}" onclick="borradorProductos(${carrito.indexOf(element)})">X</button>
            </div>
            `
        })
    }
    cantidadTotal()
}

// COMO NO HAY INPUT ESTO NO SE USA

// function inputChange(e) {
//     console.log(e)
//     if (e.target.value == 0) {
//         carrito.splice(e.target.name, 1);
//     } else {
//         carrito[e.target.name].cantidad = e.target.value;
//     }
//     localStorage.carrito = JSON.stringify(carrito)
//     renderCarrito();
// }


function borradorProductos(index){
    carrito[index].cantidad = carrito[index].cantidad - 1;
    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }
    localStorage.carrito = JSON.stringify(carrito)
    renderCarrito()
    restadorDePrecio()
}

function sumadordePrecios(){
    let total = 0
    let precioTotal = document.querySelector('#total') 
    carrito.forEach(comidita => {
         total = total + comidita.precio * comidita.cantidad
            return 
        });
        localStorage.carrito = JSON.stringify(carrito)
        precioTotal.innerHTML = total
    }

    function restadorDePrecio(){
        carrito.forEach(noQuiero =>{
            total + sumadordePrecios() - noQuiero.precio
        })  
        localStorage.carrito = JSON.stringify(carrito) 
    }

var vaciadorProductos = document.querySelector('#vaciarSide')
vaciadorProductos.addEventListener('click', vaciadorDeSide)
function vaciadorDeSide(){
    let precioTotal = document.querySelector('#total')
    carrito = []
    total = 0
    precioTotal.innerHTML = total
    renderCarrito()
}

function cantidadTotal(){
    if(carrito.length>0){
        carrito.forEach(sumador=>{
            total = 0
            total += sumador.cantidad
            console.log("cantidadTotal -> total", total)
        })
        let elementoNuevo = document.createElement('div')
        elementoNuevo.setAttribute ('id', 'valorCantidad')
        let elementoPadre = document.querySelector('#carritoMercado')
        elementoPadre.appendChild(elementoNuevo)
    }
}

renderBaseDeDatos()
renderCarrito()
sumadordePrecios()

//--------------------------------------------------
//--------------------------------------------------
                // INTENTO DE AYAX 
//--------------------------------------------------
//--------------------------------------------------

// function renderBaseDeDatos(baseDatos){
//     $(function() {
//         $.ajax({
//             url:'baseDatos.json',
//             dataType: 'json',
//             success: function (data) {
//                 data.forEach(function(producto){
            
//                     //-----------------------------
//                     // EJEMPLO SIN VISTO CON MAURO
//                     //----------------------------
                    
//                     var miNodo = document.createElement('div')
//                     miNodo.classList.add('sectionM_articlediv_div')
//                     miNodo.innerHTML += `
//                     <div class="sectionM_articledivdiv_div" style="height:60rem">
//                         <div class="sectionM_articledivdivdiv_div-foto-m">
//                             <img src="${producto.img}" alt="...">
//                         </div>
//                         <div class="sectionM_articledivdivdiv_div-texto-m">
//                             <h2 class="sectionM_articledivdivdivdiv-texto-m_h2">${producto.nombre}</h2>
//                             <p class="sectionM_articledivdivdivdiv-texto-m_p">-${producto.precio}-</p>
//                             <div class="sectionM_articledivdivdivdiv-texto-m_div">
//                                 <a onclick="sumarCarrito(${baseDatos.indexOf(producto)})">QUIERO!!!!</a>
//                             </div>
//                         </div>
//                     </div>
//                     `
                
            
//                         if ((producto.codigo) < 2){
//                             $clasePizzaPastas.appendChild(miNodo)
//                         }
//                         else if ((producto.codigo < 3) && (producto.codigo >= 2)){
//                             $claseCarne.appendChild(miNodo)
//                         }
//                         else if ((producto.codigo < 4) && (producto.codigo >= 3)){
//                             $claseCerdo.appendChild(miNodo)
//                         }
//                         else if ((producto.codigo < 5) && (producto.codigo >= 4)){
//                             $clasePollo.appendChild(miNodo)
//                         }
//                         else if ((producto.codigo < 6) && (producto.codigo >= 5)){
//                             $claseEstacion.appendChild(miNodo)
//                         }
//                         else{
//                             $claseSaludabe.appendChild(miNodo)
//                         } 
//                 }) 
            
//             }    
//         })
//     });
// }