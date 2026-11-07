 <!-- ================= SCRIPT INTEGRADO ================= -->

        document.addEventListener('DOMContentLoaded', function() {
            
            // ==========================================
            // 1. LÓGICA DE STOCK VISUAL (Agotado)
            // ==========================================
            const tarjetas = document.querySelectorAll('.tarjeta-libro');
            tarjetas.forEach(tarjeta => {
                const stock = parseInt(tarjeta.getAttribute('data-stock'));
                const boton = tarjeta.querySelector('.boton-agregar');
                if (stock === 0 && boton) {
                    boton.textContent = 'Agotado';
                    boton.classList.add('agotado');
                    boton.disabled = true;
                }
            });

            // ==========================================
            // 2. LÓGICA DE "VER MÁS"
            // ==========================================
            const btnVerMas = document.getElementById('btn-ver-mas');
            const librosOcultos = document.querySelectorAll('.libro-oculto');
            let mostrandoExtra = false;

            if (btnVerMas) {
                btnVerMas.addEventListener('click', function() {
                    librosOcultos.forEach(libro => {
                        libro.style.display = mostrandoExtra ? 'none' : 'flex';
                    });
                    mostrandoExtra = !mostrandoExtra;
                    btnVerMas.textContent = mostrandoExtra ? 'Ver menos' : 'Ver más';
                });
            }

            // ==========================================
            // 3. LÓGICA DEL SONIDO (Web Audio API)
            // ==========================================
            // Esto genera un sonido de "clic" directamente con el navegador.
            // No usa archivos MP3 externos, así que no falla por CORS.
            let audioContext;
            
            function reproducirSonidoClic() {
                try {
                    if (!audioContext) {
                        audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    }
                    if (audioContext.state === 'suspended') {
                        audioContext.resume();
                    }

                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();

                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);

                    // Sonido: un "tic" corto y agudo
                    oscillator.type = 'sine';
                    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                    
                    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.1);
                } catch (error) {
                    console.log("Error con el audio:", error);
                }
            }

            // ==========================================
            // 4. LÓGICA DEL CARRITO CON LOCALSTORAGE
            // ==========================================
            
            const btnCarritoHeader = document.getElementById('btn-carrito');
            const modalCarrito = document.getElementById('modal-carrito');
            const btnCerrarModal = document.getElementById('btn-cerrar-modal');
            const listaCarrito = document.getElementById('lista-carrito');
            const totalCarrito = document.getElementById('total-carrito');
            const btnVaciar = document.getElementById('btn-vaciar');
            const btnPagar = document.getElementById('btn-pagar');
            const contadorCarrito = document.getElementById('contador-carrito');
            
            const notificacion = document.getElementById('notificacion');
            const textoNotificacion = document.getElementById('texto-notificacion');
            let temporizadorNotificacion;

            let carrito = [];

            // 4.1 Cargar carrito desde localStorage
            function cargarCarritoDesdeStorage() {
                const carritoGuardado = localStorage.getItem('carritoElTunel');
                if (carritoGuardado) {
                    carrito = JSON.parse(carritoGuardado);
                } else {
                    carrito = [];
                }
                actualizarContador();
            }

            // 4.2 Guardar carrito en localStorage
            function guardarCarritoEnStorage() {
                localStorage.setItem('carritoElTunel', JSON.stringify(carrito));
            }

            // 4.3 Actualizar contador visual
            function actualizarContador() {
                const totalItems = carrito.reduce((suma, libro) => suma + libro.cantidad, 0);
                contadorCarrito.textContent = totalItems;
                contadorCarrito.style.display = totalItems > 0 ? 'flex' : 'none';
            }

            // 4.4 Mostrar Notificación Flotante
            function mostrarNotificacion(mensaje) {
                textoNotificacion.textContent = mensaje;
                notificacion.style.display = 'flex';
                
                clearTimeout(temporizadorNotificacion);
                temporizadorNotificacion = setTimeout(() => {
                    notificacion.style.display = 'none';
                }, 3000);
            }

            // 4.5 Agregar al carrito
            function agregarAlCarrito(id, titulo, precio, stockMaximo) {
                const libroExistente = carrito.find(libro => libro.id === id);

                if (libroExistente) {
                    if (libroExistente.cantidad < stockMaximo) {
                        libroExistente.cantidad++;
                    } else {
                        mostrarNotificacion('⚠️ Stock máximo alcanzado');
                        return;
                    }
                } else {
                    carrito.push({
                        id: id,
                        titulo: titulo,
                        precio: precio,
                        cantidad: 1,
                        stockMaximo: stockMaximo
                    });
                }

                guardarCarritoEnStorage();
                actualizarContador();
                renderizarCarrito();
                
                // EFECTOS: Sonido + Notificación
                reproducirSonidoClic();
                mostrarNotificacion('¡' + titulo + ' agregado!');
            }

            // 4.6 Delegación de eventos
            document.addEventListener('click', function(e) {
                const boton = e.target.closest('.boton-agregar');
                
                if (boton) {
                    e.preventDefault();
                    
                    if (boton.disabled || boton.classList.contains('agotado')) {
                        return;
                    }

                    const tarjeta = boton.closest('.tarjeta-libro');
                    const id = tarjeta.getAttribute('data-id');
                    const titulo = tarjeta.querySelector('h3').textContent.trim();
                    const precioTexto = tarjeta.querySelector('.precio strong').textContent;
                    const precio = parseFloat(precioTexto.replace('$', '').trim());
                    const stock = parseInt(tarjeta.getAttribute('data-stock'));

                    agregarAlCarrito(id, titulo, precio, stock);
                }
            });

            // 4.7 Abrir Modal
            if (btnCarritoHeader) {
                btnCarritoHeader.addEventListener('click', function(e) {
                    e.preventDefault();
                    modalCarrito.classList.add('activo');
                    renderizarCarrito();
                });
            }

            // 4.8 Cerrar Modal (X)
            if (btnCerrarModal) {
                btnCerrarModal.addEventListener('click', function() {
                    modalCarrito.classList.remove('activo');
                });
            }

            // 4.9 Cerrar Modal (Clic fuera)
            window.addEventListener('click', function(e) {
                if (e.target === modalCarrito) {
                    modalCarrito.classList.remove('activo');
                }
            });

            // 4.10 Vaciar Carrito
            if (btnVaciar) {
                btnVaciar.addEventListener('click', function() {
                    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
                        carrito = []; 
                        guardarCarritoEnStorage();
                        actualizarContador();
                        renderizarCarrito();
                        mostrarNotificacion('🗑️ Carrito vaciado');
                    }
                });
            }

            // 4.11 Pagar
            if (btnPagar) {
                btnPagar.addEventListener('click', function() {
                    if (carrito.length > 0) {
                        alert('¡Gracias por tu compra! Total: ' + totalCarrito.textContent);
                        carrito = [];
                        guardarCarritoEnStorage();
                        actualizarContador();
                        renderizarCarrito();
                        modalCarrito.classList.remove('activo');
                    }
                });
            }

            // 4.12 Renderizar Carrito
            function renderizarCarrito() {
                listaCarrito.innerHTML = '';

                if (carrito.length === 0) {
                    listaCarrito.innerHTML = '<p class="mensaje-vacio">Tu carrito está vacío. ¡Agrega algunos libros!</p>';
                    totalCarrito.textContent = '$0.00';
                    btnPagar.disabled = true;
                    btnVaciar.disabled = true;
                } else {
                    let total = 0;
                    carrito.forEach(libro => {
                        const item = document.createElement('div');
                        item.classList.add('item-carrito');
                        item.innerHTML = `
                            <div class="item-carrito-info">
                                <strong>${libro.titulo}</strong>
                                <span>${libro.cantidad} x $${libro.precio.toFixed(2)}</span>
                            </div>
                            <span>$${(libro.cantidad * libro.precio).toFixed(2)}</span>
                        `;
                        listaCarrito.appendChild(item);
                        total += libro.cantidad * libro.precio;
                    });
                    totalCarrito.textContent = `$${total.toFixed(2)}`;
                    btnPagar.disabled = false;
                    btnVaciar.disabled = false;
                }
            }

            // 5. INICIALIZAR
            cargarCarritoDesdeStorage();
            renderizarCarrito();

        });
  