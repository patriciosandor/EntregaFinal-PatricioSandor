//----------------------------------------
//----------------------------------------
        // BASE DE DATOS 
//----------------------------------------
//----------------------------------------

var baseDatos=[

//----------------------------------------
        // PIZZAS Y PASTAS
//----------------------------------------

        {
        nombre: 'PIZZA DE MUZZARELLA INDIVIDUALES X3',
        precio : 380,
        codigo: 1.00,
        img : 'fotos/menu1plato1.jpg',
        cantidad : 0
    },

    {
        nombre: 'TARTAS INDIVIDUALES',
        precio : 210,
        codigo: 1.01,
        img : 'fotos/menu1plato2.jpg',
        cantidad : 0
    },
    {
        nombre: 'ÑOQUIS DE PAPA A LA BOLOGNESA',
        precio : 260,
        codigo: 1.02,
        img : 'fotos/menu1plato3.jpg',
        cantidad : 0
    },

    {
        nombre: 'SORRENTINOS DE CALABAZA C/ SALSA ROSA',
        precio : 260,
        codigo: 1.03,
        img : 'fotos/menu1plato4.jpg',
        cantidad : 0
    },
    {
        nombre: 'SORRENTINOSDE RICOTA JYQ C/ FILETO',
        precio : 260,
        codigo: 1.04,
        img : 'fotos/menu1plato5.jpg',
        cantidad : 0
    },

//----------------------------------------
            // CARNE
//----------------------------------------

    {
        nombre: 'MILANESA DE LOMO NAPOLITANA C/ PAPINES',
        precio : 300,
        codigo: 2.00,
        img : 'fotos/menu2plato1.jpg'
    },

    {
        nombre: 'KID MILNESA C/PURÉ',
        precio : 260,
        codigo: 2.01,
        img : 'fotos/menu2plato2.jpg'
    },
    {
        nombre: 'LOMO STROGONOFF C/ ARROZ',
        precio : 370,
        codigo: 2.02,
        img : 'fotos/menu2plato3.jpg'
    
    },

    {
        nombre: 'LOMO AL CHAMPIGNON C/ ARROZ AMARILLO',
        precio : 390,
        codigo: 2.03,
        img : 'fotos/menu2plato4.jpg'
    },
    {
        nombre: 'CARNE TIERNIZADA C/ PURE DE ZANAHORIA Y BATATA',
        precio : 660,
        codigo: 2.04,
        img : 'fotos/menu2plato5.jpg'
    },

//----------------------------------------
            // CERDO
//----------------------------------------

    {
        nombre: 'BONDIOLA DESM C/MIEL, CERVEZA Y PAPAS',
        precio : 400,
        codigo: 3.00,
        img : 'fotos/menu3plato1.jpg'
    },
    {
        nombre: 'BBQ RIBS C/PURE DE BATATA',
        precio : 450,
        codigo: 3.01,
        img : 'fotos/menu3plato2.jpg'
    },
    {
        nombre: 'RIBS JACK DANIELS C/ PAPAS ESPECIALES',
        precio : 490,
        codigo: 3.02,
        img : 'fotos/menu3plato3.jpg'
    },

//----------------------------------------
            // POLLO
//----------------------------------------


    {
        nombre: 'BASTONES DE POLLO C/ SALSA BBQ X 6un',
        precio : 350,
        codigo: 4.00,
        img : 'fotos/menu4plato1.jpg'
    },

    {
        nombre: 'POLLO AL DIJON C/ PURE DE CALABAZA',
        precio : 300,
        codigo: 4.01,
        img : 'fotos/menu4plato2.jpg'

    },
    {
        nombre: 'POLLO AL VERDEO C/ PAPAS RÚSTICAS',
        precio : 400,
        codigo: 4.02,
        img : 'fotos/menu4plato3.jpg'
    },

//----------------------------------------
            // ESTACION
//----------------------------------------

    {
        nombre: 'GUISO DE LENTEJA CASERO',
        precio : 350,
        codigo: 5.00,
        img : 'fotos/menu5plato1.jpg'
    },
    {
        nombre: 'LOCRO CASERO',
        precio : 350,
        codigo: 5.01,
        img : 'fotos/menu5plato2.jpg'
    },
    {
        nombre: 'TORTILLA DE PAPA XL',
        precio : 300,
        codigo: 5.02,
        img : 'fotos/menu5plato3.jpg'
    },
    {
        nombre: 'RISOTO DE MARISCOS',
        precio : 400,
        codigo: 5.03,
        img : 'fotos/menu5plato4.jpg'
    },

//----------------------------------------
            // SALUDABLE
//----------------------------------------

    {
        nombre: 'TARTA INTEGRAL DE VEGETALES',
        precio : 260,
        codigo: 6.00,
        img : 'fotos/menu6plato1.jpg'
    },
    {
        nombre: 'TARTA INTEGRAL CAPRESSE',
        precio : 260,
        codigo: 6.01,
        img : 'fotos/menu6plato2.jpg'
    },
    {
        nombre: 'WOK VEGETALES Y POLLO',
        precio : 320,
        codigo: 6.02,
        img : 'fotos/menu6plato3.jpg'
    },
    {
        nombre: 'PECHUGA AL VACIO C/ ARROZ YAMANI Y VEGETALES',
        precio : 350,
        codigo: 6.03,
        img : 'fotos/menu6plato4.jpg'
    },

]

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

// RENDERIZDOR DE CARRITO
//---------------------------------------
let carrito = []
let $contenedro = document.querySelector('.sectionM__sidebar__div')

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
                <p class="sectionM__article__div__div__div__div-texto-m__p">-$${producto.precio}-</p>
                <div class="sectionM__article__div__div__div__div-texto-m__div">
                    <a onclick="sumarCarrito(${baseDatos.indexOf(producto)})">QUIERO!!!!</a>
                </div>
            </div>
        </div>
        `
      
        // <a href="#" onclick="sumarCarrito(${baseDatos.indexOf(producto)})">QUIERO!!!!</a>

        // let $botonCompras = document.querySelector('.sectionM__article__div__div__div__div-texto-m__div')
        // let botonLlamador = document.createElement('a')
        // botonLlamador.classList.add('sectionM__article__div__div__div__div-texto-m__div__a')
        // botonLlamador.addEventListener('click', function(){
        // sumarCarrito(baseDatos.indexOf(prductos))})
        // botonLlamador.style.fontSize = '1.8rem'
        // botonLlamador.style.borderRadius = '1rem'
        // botonLlamador.style.padding = '1.8rem'
        // botonLlamador.style.color= 'white'
        // botonLlamador.textContent = 'Quiero!!!!!'

        // $botonCompras.appendChild(botonLlamador)

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
renderBaseDeDatos()

var carritoCompras = $('#carritoMercado').on('click', function(){
    $('.sectionM__sidebar').toggleClass("close")
})

function sumarCarrito(index) {
    limpiar()
    carrito.push(baseDatos[index])
    renderCarrito()
}
function limpiar() {
    while ($contenedro.firstChild) {
        $contenedro.removeChild($contenedro.firstChild)
    }
}




// var scrollearAside = document.querySelector('.sectironM__sideba ')
// scrollearAside.addEventListener ('scroll',function(e){
//     e.target.scrollTop;//pixels scrolled from element top
// 	e.target.scrollHeight;//pixels of the whole element.
// })

// var myElement=document.getElementById("someElementID");
// myElement.addEventListener("scroll", function(ev){
// 	ev.target.scrollTop;//pixels scrolled from element top
// 	ev.target.scrollHeight;//pixels of the whole element.
// });


function renderCarrito(){
    carrito.forEach(function(element){
    let $sectorFoto = document.createElement('div')
    $sectorFoto.classList.add('sectionM__sidebar__div__div', 'col-6')
    $sectorFoto.innerHTML=`
        <img src="${element.img}" class="img-fluid">
        <h4 class="sectionM__sidebar__div__div__div__h6 shoppingCartItemTitle text-truncate ml-3 mb-0">${element.nombre}</h4>
    `
    let $sectorPrecio = document.createElement('div')
    $sectorPrecio.classList.add('sectionM__sidebar__div__div2', 'col-6')
    $sectorPrecio.innerHTML=`
    <div class="sectionM__sidebar__div__div2__div d-flex align-items-center h-100 border-bottom pb-2 pt-3">
        <p class="sectionM__sidebar__div__div2__div__p mb-0 ">${element.precio}</p>
    </div>
    `
    $contenedro.appendChild($sectorFoto, $sectorPrecio)
})
}




// function agregar() {
//     var comida = prompt('Elegi tu comida favorita')
//     var persona = prompt('Elegi tu persona favorita')
//     var lugar = prompt('Elegi tu lugar del mundo favorito')
//     validar()
//     function validar() {
//         if (comida && persona && lugar != "") {
//             const sector = document.getElementById('sectorTexto')
//             const nuevoTexto = document.createElement('h1')
//             nuevoTexto.textContent = (`Cuando se levante la CUARENTENA tenes que salir a comer ${comida} con ${persona} en ${lugar}`)
//             nuevoTexto.classList.add('respuestaJuego')
//             sector.appendChild(nuevoTexto)
//         } else {
//             const sector = document.getElementById('sectorTexto')
//             const nuevoTexto = document.createElement('h1')
//             nuevoTexto.textContent = ('PONE LO QUE TE DIGO GIL Y SI NO ENTENDES PEDILE A MAURO')
//             nuevoTexto.classList.add('respuestaJuego')
//             sector.appendChild(nuevoTexto)
//         }
//     }
// }

// function borro(){
//     document.querySelector('.respuestaJuego').remove()
// }



// function sumarCarrito(producto) {
//         var cargar = carrito.find(product => product.nombre == carrito.nombre)

//         if (cargar){
//             carrito.push(producto)
//         }
//         else{
//             carrito.push(producto)
//         }
        
//     console.table(carrito)
//     }
//     agregarCarrito('PIZZA DE MUZZARELLA INDIVIDUALES X3')
//     agregarCarrito('PIZZA DE MUZZARELLA INDIVIDUALES X3')
//     agregarCarrito('MAMA ESTA PRESA')



//EJEMPLO DE EMA

// function agregar (a) {

//     var duplicado = carritoCompras.find(elem => elem.nombre == a.nombre);
    
//     if (duplicado) {
//         duplicado.cantidad++;
//     } else {
//         carritoCompras.push(a);
//     }   
//     var carritoJson = JSON.stringify(carritoCompras);
//     localStorage.setItem('carrito', carritoJson);
//     borraContenido();
//     agregaItem();
// }

// function agregaItem(){
//     let carritoJason = localStorage.getItem('carrito');
//     carritoNuevo = JSON.parse(carritoJason);
//     for (i=0; i < carritoNuevo.length; i++) {
//     let listaCarrito = document.querySelector('.listaProductos');
//     let itemCarrito = document.createElement('ul');
//     itemCarrito.innerHTML = `<li> <a href="${carritoNuevo[i].direccion}"> <img src="${carritoNuevo[i].imagen}" alt="" class="imgCarrito"> </a> </li>
//     <li> <a href="${carritoNuevo[i].direccion}"> ${carritoNuevo[i].nombre} </a> </li>
//     <li> ${carritoNuevo[i].cantidad}un </li>
//     <li> ${carritoNuevo[i].precio}</li>
//     <li> <button onclick="eliminarDelSideBar(${carritoNuevo[i].nombreConst})">X</button> </li>`;
//     itemCarrito.classList.add('ulCarrito');
//     listaCarrito.appendChild(itemCarrito);
// }
    
// }



// BASE DE DATOD PROVISORIO !!!!! VER ESTE TEMA

// renderBaseDeDatos2()
// clasePizzaPastas = $('#clasePizzaPastas')
// function renderBaseDeDatos2(){
//     baseDatos.forEach(function(products){
//         clasePizzaPastas.innerHTML += `
//                 <div class="sectionM__article__div__div__div" style="height: 60rem;">
//                 <div class="sectionM__article__div__div__div__div-foto-m">
//                     <img class="card-img-top" src="${products.img}">
//                 </div>
//                     <div class="sectionM__article__div__div__div__div-texto-m">
//                         <h2 class="sectionM__article__div__div__div__div-texto-m__h2">${products.nombre}</h2>
//                         <p class="sectionM__article__div__div__div__div-texto-m__p">${products.precio}</p>
//                     </div>
//                     <div class="sectionM__article__div__div__div__div-texto-m__div" style="margin-bottom: 3rem;">
//                         <a marcador="undefined" style="font-size: 1.8rem; border-radius: 1rem; padding: 1.8rem; color: white;">Quiero!!!!!</a>
//                     </div>
//                 </div>
//             </div>
//             `
//     })
//     }



        //------------------------
        //------------------------
        // EJEMPLO SIN INNERHTML
        //------------------------
        //------------------------

// for (let info of baseDatos){

        // ESTRUCTURA
        // let miNodo = document.createElement('div')
        // miNodo.classList.add('sectionM__article__div__div')
        //     // SECTOR BODY
        //     let sectorBody = document.createElement('div')
        //     sectorBody.classList.add('sectionM__article__div__div__div')
        //     sectorBody.style.height = '60rem'
            
        //         //SECTR FOTO
        //         let sectorFoto = document.createElement('div')
        //         sectorFoto.classList.add('sectionM__article__div__div__div__div-foto-m')
                
        //             //IMAGEN
        //             let $img = document.createElement('img')    
        //             $img.classList.add('card-img-top')
        //             $img.setAttribute('src', info['img'])
            
        //         // CARDBODY
        //         let carBody = document.createElement ('div')
        //         carBody.classList.add('sectionM__article__div__div__div__div-texto-m')
                
        //                 // TITULOCARD
        //                 let $h2 = document.createElement('h2')
        //                 $h2.classList.add('sectionM__article__div__div__div__div-texto-m__h2')
        //                 $h2.textContent = info.nombre
                        
        //                 // TEXTO TIULO
        //                 let precioPLato = document.createElement('p')
        //                 precioPLato.classList.add('sectionM__article__div__div__div__div-texto-m__p')
        //                 precioPLato.textContent = `-$${info.precio}-`
                
        //                 //SECTOR BOTON
        //                 let sectorBoton = document.createElement('div')
        //                 sectorBoton.classList.add('sectionM__article__div__div__div__div-texto-m__div')
        //                 sectorBoton.style.marginBottom = '3rem'
        //                     //BOTON
        //                     let botonCard = document.createElement('a')
        //                     botonCard.setAttribute('id', info['codigo'])
        //                     botonCard.style.fontSize = '1.8rem'
        //                     botonCard.style.borderRadius = '1rem'
        //                     botonCard.style.padding = '1.8rem'
        //                     botonCard.style.color= 'white'
        //                     botonCard.textContent = 'Quiero!!!!!'
                            
            
        //     sectorBody.appendChild(sectorFoto).appendChild($img) 
        //     sectorBody.appendChild(carBody).append($h2, precioPLato)
        //     sectorBody.appendChild(sectorBoton).appendChild(botonCard)     
        //     miNodo.appendChild(sectorBody)
