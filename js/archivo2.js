//---------------------------------------
        // SECTOR MENUS DE PLATOS
//---------------------------------------

// RENDERIZDOR DE PORDUCTOS
//---------------------------------------
let $clasePizzaPastas = document.querySelector('#clasePizzaPastas')
let $claseCarne = document.querySelector('#claseCarne')
let $claseCerdo = document.querySelector('#claseCerdo')
let $clasePollo = document.querySelector('#clasePollo')
let $claseEstacion = document.querySelector('#claseEstacion')
let $claseSaludabe = document.querySelector('#claseSaludable')

renderBaseDeDatos()
function renderBaseDeDatos(){
    baseDatos.forEach(function(producto){
        
        //-----------------------------
        // EJEMPLO SIN VISTO CON MAURO
        //----------------------------
        
        var miNodo = document.createElement('div')
        miNodo.classList.add('sectionM__article__div__div')
        miNodo.innerHTML = `
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
//---------------------------------------
let carrito = []
let total = 0
let $contenedro = document.querySelector('#aqui')



var carritoCompras = $('#carritoMercado').on('click', function(){
    $('.sectionM__sidebar').toggleClass("cerrar")
})

function sumarCarrito(index) {
carrito.push(baseDatos[index])
renderCarrito();
sumadordePrecios()
 $('.sectionM__sidebar').addClass("cerrar")
}



function renderCarrito(){
    $contenedro.innerHTML = "";
    carrito.forEach(element => {
        $contenedro.innerHTML +=`
        <div class="sectionM__sidebar__div__div d-flex align-items-center d-flex  justify-content-around h-100 border-bottom pb-2 pt-3 row">
            <img src="${element.img}" class="img-fluid col-3">
            <div class="sectionM__sidebar__div__div__texto col-5">
                <h4 class="sectionM__sidebar__div__div__texto__titulo text-truncate text-center">${element.nombre}</h4>
            </div>
            <div class="sectionM__sidebar__div__div__precio col-2">
                <h4 id="monto" class="align-self-sm-center"> <span>-$</span>${(element.precio)} <span>-</span></h4>
            </div>
            <input  class="col-1" type="text" value="1">
            <button class=" col-1 btn btn-danger buttonBor" type="button"codigo="${(element.codigo)}">X</button>
        </div>
        `
        let borrador = document.querySelector('.buttonBor')
        borrador.addEventListener('click', borradorProductos)
        function borradorProductos(e){
            // let a = parseFloat(e.target.getAttribute('codigo'))
            var borradorCart = carrito.find(producto=>producto.codigo == parseFloat(e.target.getAttribute('codigo')))
            console.log("borradorProductos -> borradorCart", borradorCart)
            if (borradorCart){
            let cartBorrar = document.querySelector('.sectionM__sidebar__div__div')
            cartBorrar.remove()
            }
        }
    });

}

function sumadordePrecios(){
    let total = 0
    let precioTotal = document.querySelector('#total') 
    carrito.forEach(comidita => {
        total = total + comidita.precio * comidita.cantidad
        precioTotal.innerHTML = total   
    });
    console.log(total)
    }


