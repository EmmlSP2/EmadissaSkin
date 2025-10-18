// Año dinámico en el footer
document.getElementById('y').textContent = new Date().getFullYear();

// Toggle menú móvil
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');
navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', navMenu.classList.contains('is-open'));
});

// Botón volver arriba
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) toTop.classList.add('show');
  else toTop.classList.remove('show');
});
toTop?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Simulación carrito: botón "Agregar"
document.querySelectorAll('[data-add]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.getAttribute('data-add');
    alert(`Añadido al carrito: ${id.replace('-', ' ')}`);
  });
});

// Validación básica del formulario de contacto
const form = document.getElementById('formContacto');
const formMsg = document.getElementById('formMsg');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  if (!form.checkValidity()){
    formMsg.textContent = 'Por favor completa los campos requeridos.';
    formMsg.style.color = '#c0392b';
    return;
  }
  formMsg.textContent = '¡Gracias! Te contactaremos muy pronto.';
  formMsg.style.color = '#2c7a4b';
  form.reset();
});

// Newsletter
const newsletter = document.getElementById('newsletter');
const newsMsg = document.getElementById('newsMsg');
newsletter?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = newsletter.querySelector('input[type="email"]').value.trim();
  if(!email){ newsMsg.textContent = 'Ingresa un email válido.'; return; }
  newsMsg.textContent = '¡Listo! Te suscribiste al boletín.';
  newsletter.reset();
});

let carrito = [];
let total = 0;

const cartBtn = document.getElementById("cartBtn");
const cart = document.getElementById("cart");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

// Abrir y cerrar carrito
cartBtn.addEventListener("click", () => cart.classList.add("open"));
closeCart.addEventListener("click", () => cart.classList.remove("open"));


document.querySelectorAll("[data-add]").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-add");
    const nombre = btn.closest(".card").querySelector("h3").textContent;
    const precio = 150; 

    carrito.push({ id, nombre, precio });
    total += precio;
    actualizarCarrito();
  });
});

function actualizarCarrito() {
  cartItems.innerHTML = "";
  carrito.forEach((item, index) => {
    const li = document.createElement("li");

    // Obtener la imagen del producto
    const imgSrc = document.querySelector(`[data-add="${item.id}"]`)
                      .closest(".card")
                      .querySelector("img").src;

    li.innerHTML = `
      <img src="${imgSrc}" alt="${item.nombre}" style="width:50px; height:50px; object-fit:cover; border-radius:6px; margin-right:10px;">
      <span>${item.nombre} - $${item.precio}</span>
      <button onclick="eliminarDelCarrito(${index})">&times;</button>
    `;
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.gap = "10px";

    cartItems.appendChild(li);
  });

  cartTotal.textContent = total;
  cartCount.textContent = carrito.length;
}

function eliminarDelCarrito(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  actualizarCarrito();
}

const searchInput = document.getElementById("search");
const productList = document.getElementById("productList");

searchInput?.addEventListener("keyup", () => {
  const query = searchInput.value.toLowerCase();
  const cards = productList.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const desc = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(query) || desc.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
const verMasBtn = document.getElementById('verMasKit');
const coloresDiv = document.getElementById('coloresKit');
const imagenPrincipal = document.getElementById('imagenPrincipal');


verMasBtn.addEventListener('click', () => {
  coloresDiv.style.display = coloresDiv.style.display === 'block' ? 'none' : 'block';
});


document.querySelectorAll('.mini-imagenes img').forEach(img => {
  img.addEventListener('click', () => {
    imagenPrincipal.src = img.src;
    imagenPrincipal.alt = "Kit " + img.dataset.color;
  });
});





