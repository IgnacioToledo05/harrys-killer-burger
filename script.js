// BASE DE DATOS DEL MENÚ
// Para agregar productos: copiá un objeto completo { ... }, pegalo debajo y editá los datos.
// BASE DE DATOS DEL MENÚ ACTUALIZADA (PRECIOS 2026)
const MENU_DATA = [
    {
        id: 1,
        nombre: "Double Tap",
        descripcion: "180g Smash + Cheddar x2 + Mayonesa Harry's",
        precio: 11500,
        categoria: "burgers",
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
    },
    {
        id: 2,
        nombre: "Squad de Carnes",
        descripcion: "180g Smash + Cheddar x2 + Panceta Crocante + BBQ",
        precio: 13200,
        categoria: "burgers",
        imagen: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500"
    },
    {
        id: 3,
        nombre: "Triple Kill",
        descripcion: "270g Triple Carne + Triple Cheddar + Cebolla Crispy",
        precio: 15500,
        categoria: "burgers",
        imagen: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500"
    },
    {
        id: 4,
        nombre: "Papas Heavy",
        descripcion: "Triple cocción con salsa cheddar y verdeo",
        precio: 6500,
        categoria: "papas",
        imagen: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500"
    },
    {
        id: 5,
        nombre: "Papas Killer",
        descripcion: "Bañadas en salsa de carne, queso fundido y chiles",
        precio: 7800,
        categoria: "papas",
        imagen: "https://images.unsplash.com/photo-1630384066242-17a17833f34d?w=500"
    },
    {
        id: 6,
        nombre: "Coca-Cola 500ml",
        descripcion: "Línea completa (Original, Zero)",
        precio: 2500,
        categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500"
    },
    {
        id: 7,
        nombre: "Cerveza Artesanal",
        descripcion: "Pinta de IPA o Honey bien fría",
        precio: 4500,
        categoria: "bebidas",
        imagen: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500"
    }
];

const container = document.getElementById('menu-container');

// Función para mostrar los productos
function renderMenu(filter = 'burgers') {
    container.innerHTML = ''; // Limpiamos el contenedor
    
    const filteredItems = MENU_DATA.filter(item => item.categoria === filter);

    filteredItems.forEach(item => {
        const card = `
            <div class="card">
                <div class="card-info">
                    <h3>${item.nombre}</h3>
                    <p>${item.descripcion}</p>
                    <span class="price">$${item.precio}</span>
                </div>
                <img src="${item.imagen}" alt="${item.nombre}">
            </div>
        `;
        container.innerHTML += card;
    });
}

// Función para los botones de filtrado
function filterMenu(categoria) {
    // Actualizar botones activos
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Renderizar categoría seleccionada
    renderMenu(categoria);
}

// Carga inicial (Burgers por defecto)
window.onload = () => renderMenu('burgers');