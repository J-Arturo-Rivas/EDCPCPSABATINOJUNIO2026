document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECTORES DEL DOM
    const btnAbrirCarrito = document.getElementById('btn-abrir-carrito');
    const btnCerrarCarrito = document.getElementById('btn-cerrar-carrito');
    const modalCarrito = document.getElementById('modal-carrito');
    const contenedorItems = document.getElementById('carrito-items-container');
    const lblTotal = document.getElementById('carrito-total');
    const btnPagar = document.getElementById('btn-pagar');
    const btnVaciar = document.getElementById('btn-vaciar-carrito');
    const contadorHeader = document.getElementById('contador-carrito');

    // 2. ESTADO Y LOCALSTORAGE
    let carrito = JSON.parse(localStorage.getItem('carritoElTunel')) || [];

    function guardarCarrito() {
        localStorage.setItem('carritoElTunel', JSON.stringify(carrito));
        actualizarContadorHeader();
    }

    function actualizarContadorHeader() {
        const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
        contadorHeader.textContent = totalItems;
    }

    // 3. AGREGAR AL CARRITO (Delegación de eventos)
    document.body.addEventListener('click', (e) => {
        // IMPORTANTE: Buscamos la clase exacta de tus botones "btn-agregar-carrito"
        const boton = e.target.closest('.btn-agregar-carrito');
        
        if (boton) {
            e.preventDefault();
            
            // Extraemos los datos de los atributos data-*
            const id = boton.getAttribute('data-id');
            const nombre = boton.getAttribute('data-nombre');
            const precio = parseFloat(boton.getAttribute('data-precio'));
            const imagen = boton.closest('.tarjeta-libro').querySelector('img').src;

            const STOCK_MAXIMO = 5; 
            const indexExistente = carrito.findIndex(libro => libro.id === id);

            if (indexExistente !== -1) {
                if (carrito[indexExistente].cantidad < STOCK_MAXIMO) {
                    carrito[indexExistente].cantidad += 1;
                } else {
                    alert(`No hay más stock de "${nombre}"`);
                    return;
                }
            } else {
                carrito.push({ id, nombre, precio, imagen, cantidad: 1 });
            }

            guardarCarrito();
            renderizarCarrito(); 
        }
    });

    // 4. RENDERIZAR EL CARRITO
    function renderizarCarrito() {
        contenedorItems.innerHTML = '';

        if (carrito.length === 0) {
            contenedorItems.innerHTML = `<p class="mensaje-vacio">Tu carrito está vacío. ¡Agrega algunos libros!</p>`;
            lblTotal.textContent = '$0.00';
            btnPagar.disabled = true;
            btnVaciar.disabled = true;
            return;
        }

        let totalAcumulado = 0;
        
        carrito.forEach((libro, index) => {
            totalAcumulado += libro.precio * libro.cantidad;
            
            const itemHTML = document.createElement('div');
            itemHTML.classList.add('carrito-item');
            itemHTML.innerHTML = `
                <div class="carrito-item-info">
                    <img src="${libro.imagen}" alt="${libro.nombre}">
                    <div class="carrito-item-detalles">
                        <h4>${libro.nombre}</h4>
                        <p>Cantidad: ${libro.cantidad}</p>
                    </div>
                </div>
                <div class="carrito-item-precio">
                    $${(libro.precio * libro.cantidad).toFixed(2)}
                </div>
                <button class="btn-eliminar-item" data-index="${index}">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            `;
            contenedorItems.appendChild(itemHTML);
        });

        lblTotal.textContent = `$${totalAcumulado.toFixed(2)}`;
        btnPagar.disabled = false;
        btnVaciar.disabled = false;

        // Eventos para eliminar item
        document.querySelectorAll('.btn-eliminar-item').forEach(boton => {
            boton.addEventListener('click', (e) => {
                const indexLibro = parseInt(e.currentTarget.getAttribute('data-index'));
                carrito.splice(indexLibro, 1);
                guardarCarrito();
                renderizarCarrito();
            });
        });
    }

    // 5. EVENTOS DEL MODAL
    btnAbrirCarrito.addEventListener('click', (e) => {
        e.preventDefault(); // Evita recargar la página
        modalCarrito.classList.add('activo');
        renderizarCarrito();
    });

    btnCerrarCarrito.addEventListener('click', () => {
        modalCarrito.classList.remove('activo');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalCarrito) {
            modalCarrito.classList.remove('activo');
        }
    });

    btnVaciar.addEventListener('click', () => {
        carrito = [];
        guardarCarrito();
        renderizarCarrito();
    });

    btnPagar.addEventListener('click', () => {
        alert('Redirigiendo a la pasarela de pago...');
    });

    // 6. INICIALIZAR
    actualizarContadorHeader();
});