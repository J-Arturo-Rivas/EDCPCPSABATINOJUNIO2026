// --- DATOS DE LOS LIBROS ---
const libros = [
    { id: 1, titulo: "Harry Potter y la piedra", autor: "J.K. Rowling", precio: 350, categoria: "Ficción", stock: 5, img: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 7, titulo: "La ley de Herodes", autor: "Jorge Ibargüengoitia", precio: 150, categoria: "Ficción", stock: 6, img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 13, titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", precio: 500, categoria: "Ficción", stock: 3, img: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 14, titulo: "Dune", autor: "Frank Herbert", precio: 420, categoria: "Ficción", stock: 4, img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 15, titulo: "Fahrenheit 451", autor: "Ray Bradbury", precio: 280, categoria: "Ficción", stock: 7, img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 16, titulo: "Neuromante", autor: "William Gibson", precio: 310, categoria: "Ficción", stock: 2, img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", precio: 299, categoria: "Novela", stock: 3, img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 4, titulo: "Como agua para chocolate", autor: "Laura Esquivel", precio: 180, categoria: "Novela", stock: 10, img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 8, titulo: "Arráncame la vida", autor: "Ángeles Mastretta", precio: 350, categoria: "Novela", stock: 1, img: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 17, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", precio: 600, categoria: "Novela", stock: 2, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 18, titulo: "Orgullo y prejuicio", autor: "Jane Austen", precio: 250, categoria: "Novela", stock: 5, img: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 19, titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", precio: 380, categoria: "Novela", stock: 3, img: "https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 3, titulo: "La insoportable levedad", autor: "Milan Kundera", precio: 250, categoria: "Novela", stock: 0, img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 5, titulo: "Fuerte es el silencio", autor: "Elena Poniatowska", precio: 450, categoria: "Clásico", stock: 2, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 6, titulo: "Rayuela", autor: "Julio Cortázar", precio: 445, categoria: "Clásico", stock: 4, img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 9, titulo: "Una habitación propia", autor: "Virginia Woolf", precio: 240, categoria: "Clásico", stock: 2, img: "https://images.unsplash.com/photo-1509266272358-7701da638078?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 11, titulo: "Ariel", autor: "José Enrique Rodó", precio: 120, categoria: "Clásico", stock: 5, img: "https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 20, titulo: "La Odisea", autor: "Homero", precio: 320, categoria: "Clásico", stock: 4, img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 21, titulo: "Hamlet", autor: "William Shakespeare", precio: 200, categoria: "Clásico", stock: 6, img: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 10, titulo: "Veinte poemas de amor", autor: "Pablo Neruda", precio: 200, categoria: "Poesía", stock: 8, img: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 12, titulo: "Antología Poética", autor: "Varios Autores", precio: 300, categoria: "Poesía", stock: 10, img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 22, titulo: "Hojas de hierba", autor: "Walt Whitman", precio: 280, categoria: "Poesía", stock: 3, img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 23, titulo: "Rimas y Leyendas", autor: "Gustavo Adolfo Bécquer", precio: 190, categoria: "Poesía", stock: 5, img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 24, titulo: "Piedra de Sol", autor: "Octavio Paz", precio: 220, categoria: "Poesía", stock: 4, img: "https://images.unsplash.com/photo-1509266272358-7701da638078?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { id: 25, titulo: "Oda a la cebolla", autor: "Pablo Neruda", precio: 150, categoria: "Poesía", stock: 7, img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
];

let carrito = JSON.parse(localStorage.getItem('carritoElTunel')) || []; 
let filtroCategoria = 'all';
let terminoBusqueda = '';

const booksGrid = document.getElementById('booksGrid');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cartModal');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotal = document.getElementById('cartTotal');
const searchInput = document.getElementById('searchInput');
const filterContainer = document.getElementById('filterContainer');
const toastNotification = document.getElementById('toast-notification');

function renderLibros() {
    let librosFiltrados = libros.filter(libro => {
        const matchCategoria = filtroCategoria === 'all' || libro.categoria === filtroCategoria;
        const matchBusqueda = libro.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()) || 
                              libro.autor.toLowerCase().includes(terminoBusqueda.toLowerCase());
        return matchCategoria && matchBusqueda;
    });

    booksGrid.innerHTML = '';

    if (librosFiltrados.length === 0) {
        booksGrid.innerHTML = `<div style="width: 100%; text-align: center; padding: 40px;">
            <h3>No se encontraron libros que coincidan con tu búsqueda.</h3>
            <p>Intenta con otro término o categoría.</p>
        </div>`;
        return;
    }

    librosFiltrados.forEach(libro => {
        const sinStock = libro.stock <= 0;
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <img src="${libro.img}" alt="${libro.titulo}" class="book-image">
            <h3 class="book-title">${libro.titulo}</h3>
            <p class="book-author">${libro.autor}</p>
            <p class="book-price">$${libro.precio.toFixed(2)}</p>
            <button class="btn-add" onclick="agregarAlCarrito(${libro.id})" ${sinStock ? 'disabled' : ''}>
                ${sinStock ? 'Agotado' : 'Agregar al carrito'}
            </button>
        `;
        booksGrid.appendChild(card);
    });
}

function guardarCarritoYActualizarUI() {
    localStorage.setItem('carritoElTunel', JSON.stringify(carrito));
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    cartCount.innerText = totalItems;
}

window.agregarAlCarrito = (id) => {
    const libro = libros.find(l => l.id === id);
    
    if (libro.stock <= 0) return;

    const itemEnCarrito = carrito.find(item => item.id === id);
    
    if (itemEnCarrito) {
        if (itemEnCarrito.cantidad < libro.stock) {
            itemEnCarrito.cantidad++;
        } else {
            alert("No hay más ejemplares disponibles en stock.");
            return;
        }
    } else {
        carrito.push({ id: id, cantidad: 1 });
    }

    guardarCarritoYActualizarUI();
    mostrarNotificacion();
};

function mostrarNotificacion() {
    if(!toastNotification) return;
    toastNotification.classList.add('show');
    setTimeout(() => {
        toastNotification.classList.remove('show');
    }, 2500);
}

function abrirCarrito() {
    cartModal.style.display = "block";
    renderCarrito();
}

function renderCarrito() {
    cartItemsContainer.innerHTML = '';
    
    if (carrito.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Tu carrito está vacío.</p>';
        cartTotal.innerText = "Total: $0.00";
        document.getElementById('checkoutBtn').disabled = true;
        document.getElementById('checkoutBtn').style.opacity = '0.5';
        return;
    }

    let total = 0;
    document.getElementById('checkoutBtn').disabled = false;
    document.getElementById('checkoutBtn').style.opacity = '1';

    carrito.forEach(item => {
        const libro = libros.find(l => l.id === item.id);
        const subtotal = libro.precio * item.cantidad;
        total += subtotal;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${libro.img}" alt="${libro.titulo}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-title">${libro.titulo}</div>
                <div class="cart-item-price">$${libro.precio} x ${item.cantidad} = $${subtotal.toFixed(2)}</div>
            </div>
            <div class="cart-controls">
                <button class="btn-remove" onclick="eliminarDelCarrito(${libro.id})"><i class="fas fa-trash"></i> Eliminar</button>
            </div>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}

window.eliminarDelCarrito = (id) => {
    carrito = carrito.filter(item => item.id !== id);
    guardarCarritoYActualizarUI();
    renderCarrito();
};

searchInput.addEventListener('input', (e) => {
    terminoBusqueda = e.target.value;
    renderLibros();
});

filterContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        filtroCategoria = e.target.dataset.category;
        renderLibros();
    }
});

document.getElementById('cartBtn').addEventListener('click', abrirCarrito);

document.querySelector('.close').addEventListener('click', () => {
    cartModal.style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target == cartModal) {
        cartModal.style.display = "none";
    }
});

document.getElementById('clearCartBtn').addEventListener('click', () => {
    if(confirm("¿Estás seguro de vaciar el carrito?")) {
        carrito = [];
        guardarCarritoYActualizarUI();
        renderCarrito();
    }
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (carrito.length === 0) return;
    alert("Gracias por tu compra. Redirigiendo a pasarela de pago...");
    carrito = [];
    guardarCarritoYActualizarUI();
    renderCarrito();
    cartModal.style.display = "none";
});

guardarCarritoYActualizarUI();
renderLibros();