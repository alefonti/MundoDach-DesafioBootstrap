document.addEventListener('DOMContentLoaded', () => {

    let carrito = [];

    const DOMitems = document.getElementById('items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');

    async function getProducts(url) {
        const listaProductos = [];
        await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((elemento) => {
                listaProductos.push(elemento)
            });
        });
        return listaProductos;
    }


    async function renderizarProductos() {
        const listaProductos = await getProducts('../data.json');
        listaProductos.forEach((info) => {
            //Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4', 'me-5', 'mb-3', 'mt-3');
            //Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            //Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.innerText = info.nombre;
            //Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.innerText = `$${info.precio}`;
            //Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.setAttribute('src', info.img);
            miNodoImagen.classList.add('w-100')
            //Boton
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'boton-tienda');
            miNodoBoton.innerText = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anadirProductoAlCarrito);
            //Insertamos
            miNodoCardBody.append(miNodoTitle);
            miNodoCardBody.append(miNodoPrecio);
            miNodoCardBody.append(miNodoImagen);
            miNodoCardBody.append(miNodoBoton);
            miNodo.append(miNodoCardBody);
            DOMitems.append(miNodo);
        });
}

    function anadirProductoAlCarrito(e){
        carrito.push(e.target.getAttribute('marcador'));
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
    }

    async function renderizarCarrito(){
        //Vacio el html
        DOMcarrito.innerText = '';
        //Saco los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        //Genero los nodos a partir del carrito
        const listaProductos = await getProducts('../data.json');
        carritoSinDuplicados.forEach((item) => {
            const miItem = listaProductos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);
            //Nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.innerText = `${numeroUnidadesItem} x ${miItem[0].nombre} - $${miItem[0].precio}`;
            //Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'boton-tienda');
            miBoton.innerText = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            //Mezclo Nodos
            miNodo.append(miBoton);
            DOMcarrito.append(miNodo);
        });
        //Renderizo el precio total en el html
        DOMtotal.innerText = await calcularTotal();
    }

    function borrarItemCarrito(e) {
        const id = e.target.dataset.item;
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
    }

    async function calcularTotal() {
        const listaProductos = await getProducts('../data.json');
        return carrito.reduce((total, item) =>{
            const miItem = listaProductos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0);
    }

    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        localStorage.clear();
    }

    function guardarCarritoEnLocalStorage(){
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage(){
        if (localStorage.getItem('carrito') !== null){
            carrito = JSON.parse(localStorage.getItem('carrito'));
        }
    }

    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();

});
