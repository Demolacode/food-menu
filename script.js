//--- START OF FILE script.js ---

/* ===================================
   MOTUN'S KITCHEN - JAVASCRIPT
   Modern Nigerian Food Menu Website
   =================================== */

// ===================================
// FIREBASE CONFIGURATION (New)
// ===================================
const firebaseConfig = {
    apiKey: "AIzaSyAp664yZBCUoLqtFA90v6cNw9KoFW6Y5sE",
    authDomain: "motun-s-kitchen--review.firebaseapp.com",
    projectId: "motun-s-kitchen--review",
    storageBucket: "motun-s-kitchen--review.firebasestorage.app",
    messagingSenderId: "441300806713",
    appId: "1:441300806713:web:d58dc47d533445645271e8",
    measurementId: "G-YFMNRX6N58"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
const reviewsCollection = db.collection('reviews');


// ===================================
// MENU DATA
// ===================================
const menuItems = [
    {
        id: 1,
        name: "Medium size take-away",
        category: "mains",
        price: 200,
        description: "To package anything you order",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQcb9WEs85cDkotFpeqh3jRC4v-mWcTu_KPg&s"
    },
    {
        id: 2,
        name: "Big size take-away",
        category: "mains",
        price: 300,
        description: "To package anything you order",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2DcK6qptngg3B-wjafNme4DWWa_CPhwkAFw&s"
    },
    {
        id: 3,
        name: "Disposable take-away",
        category: "mains",
        price: 100,
        description: "To package anything you order",
        image: "https://cartnear.s3.us-east-2.amazonaws.com/ng/4d4c242892bc9bf5c3f2490c6352950b.jpg"
    },
    {
        id: 4,
        name: "Jollof Rice",
        category: "mains",
        price: 300,
        description: "Nigerian Party jollof rice with rich taste - per spoon",
        image: "https://i.pinimg.com/originals/f9/6b/f9/f96bf993bc16fe5acf32df2bcb4ba443.jpg"
    },
    {
        id: 5,
        name: "Fried Rice",
        category: "mains",
        price: 300,
        description: "Nigerian fried rice with rich taste - per spoon",
        image: "https://sisijemimah.com/wp-content/uploads/2015/07/IMG_0011_20200824075644597-1024x649.jpg"
    },
    {
        id: 6,
        name: "Ewa Agoyin",
        category: "mains",
        price: 300,
        description: "Nigeria Delicious Ewa agoyin - per spoon",
        image: "https://i.pinimg.com/originals/16/72/4f/16724f8eb561af1fda6f606a9c5431c6.jpg"
    },
    {
        id: 7,
        name: "Yummy Beef",
        category: "mains",
        price: 300,
        description: "Yummy fried and peppered beef",
        image: "https://www.preciouscore.com/wp-content/uploads/2023/01/Nigerian-Beef-Stew-fried-beef-720x1080.jpg"
    },
    {
        id: 8,
        name: "Soft Bread",
        category: "mains",
        price: 400,
        description: "Nigerian soft and succulent bread - per piece",
        image: "https://static.wixstatic.com/media/3380d8_dcb9e7eda6cd4496b0a40d4805c50c91~mv2.jpg/v1/fit/w_800%2Ch_532%2Cal_c%2Cq_80/file.jpg"
    },
    {
        id: 9,
        name: "Fried Fish",
        category: "mains",
        price: 500,
        description: "Yummy Fried fish - per pieces",
        image: "https://th.bing.com/th/id/R.49b7e8e906a3dc367283f8a0f396e767?rik=p%2fBTzCSMDe9wig&pid=ImgRaw&r=0"
    },
    {
        id: 10,
        name: "Yummy Chicken",
        category: "mains",
        price: 2000,
        description: "Yummy Fried and Peppered Chicken",
        image: "https://thissillygirlskitchen.com/wp-content/uploads/2020/05/Southern-Fried-Chicken-20.jpg"
    },
    {
        id: 11,
        name: "Boiled Egg",
        category: "mains",
        price: 300,
        description: "Yummy Boiled Tasty Egg - per pieces",
        image: "https://www.islandsmile.org/wp-content/uploads/2021/09/IMG_0810-2-495x640.jpg"
    },
    {
        id: 12,
        name: "Stir Jollof Spaghetti with Beef",
        category: "mains",
        price: 2000,
        description: "Yummy Stir Jollof Spaghetti with beef",
        image: "https://1qfoodplatter.com/wp-content/uploads/2016/08/Jollof-Spaghetti-2-1140x760.jpg"
    },
    {
        id: 13,
        name: "Stir Jollof Spaghetti with Chicken",
        category: "mains",
        price: 3000,
        description: "Yummy Stir jollof spaghetti with chicken",
        image: "https://i.pinimg.com/originals/76/9a/ea/769aeaa2f00eec91c31bd80fac154e80.jpg"
    },
    {
        id: 14,
        name: "Chicken Pie",
        category: "sides",
        price: 800,
        description: "Yummy Chicken pie",
        image: "https://i.ytimg.com/vi/gvxK4-mEjTM/maxresdefault.jpg"
    },
    {
        id: 15,
        name: "Parfait",
        category: "drinks",
        price: 3000,
        description: "Yummy Parfait dessert made with love",
        image: "https://agronigeria.ng/wp-content/uploads/2025/07/Parfait-585x390.jpg"
    },
    {
        id: 16,
        name: "Chicken and Chips",
        category: "sides",
        price: 4000,
        description: "Yummy Chicken and chips made with love",
        image: "https://cdn.mos.cms.futurecdn.net/rJVxqTHxNZM2C4XYuTY5uA-1200-80.jpg"
    },
    {
        id: 17,
        name: "Zobo Drink",
        category: "drinks",
        price: 1000,
        description: " Freshly Made Hibiscus Drink",
        image: "https://afrosuyapalace.com/wp-content/uploads/2024/11/Zobo.jpeg"
    },
    {
        id: 18,
        name: "Tigernut Drink",
        category: "drinks",
        price: 1500,
        description: "Freshly Made Tigernut Drink",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmYKNiqR98cBRAu1QAD0GsQuP7PBRittjcA&s"
    },
    {
        id: 19,
        name: "Sharwama",
        category: "sides",
        price: 3000,
        description: "Tasty Sharwama",
        image: "https://kikifoodies.com/wp-content/uploads/2025/06/photo-output.jpeg"
    },
    {
        id: 20,
        name: "Fried Plantain",
        category: "mains",
        price: 50,
        description: "Tasty Fried Plantain - per pieces",
        image: "https://simshomekitchen.com/wp-content/uploads/2021/09/Cooked-plantain-in-a-white-plate-and-a-silver-fork.jpg"
     },
     {
        id: 21,
        name: "Cow Skin",
        category: "mains",
        price: 200,
        description: "Peppered Cow skin(ponmo) - per pieces",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRM6nO9ByOgmaSaNxSpljdlDl4lmrAr02YA&s"
    },
    {
        id: 22,
        name: "Asun",
        category: "sides",
        price: 1000,
        description: "Peppered Goat Meat Asun - Per Plate",
        image: "https://img-global.cpcdn.com/recipes/341cce581709694f/600x852cq80/peppered-asun-goat-meat-recipe-main-photo.webp"
    },
    {
        id: 23,
        name: "Barbecue Chicken",
        category: "sides",
        price: 2500,
        description: "Tasty barbecue Chicken- per pieces",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq8EXnbwgBaNe2P7_0W1-NXmKn7ZrO8VMDRg&s"

    },
    {
        id: 24,
        name: "Catfish Pepper Soup",
        category: "sides",
        price: 5000,
        description: "Tasty Pepper Soup - per plate",
        image: "https://dooneyskitchen.com/wp-content/uploads/2021/05/fresh-fish-peppersoup.jpg"
    },
    {
        id: 25,
        name: "Coleslaw",
        category: "sides",
        price: 500,
        description: "Tasty coleslaw",
        image: "https://unitedbakers.ca/cdn/shop/products/IMG_1236_1_1000x.jpg?v=1614976238"
    },
    {
        id: 26,
        name: "Soft Drinks",
        category: "drinks",
        price: 500,
        description: "Any soft drinks from 500 - 1500 naira",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjRs6M4e_gmalxMjHBy652BbMuiFZPyJBl_w&s"
    } 
];

/* ===================================
   AVAILABLE TODAY PAGE FUNCTIONS
   Add these to your script.js file
   =================================== */

// Available Today Data (simulates stock levels)
const availableToday = [
    { id: 4, stock: 'in-stock', quantity: },
    { id: 5, stock: 'in-stock', quantity: 15 },
    { id: 6, stock: 'low-stock', quantity: 5 },
    { id: 7, stock: 'in-stock', quantity: 12 },
    { id: 8, stock: 'in-stock', quantity: 18 },
    { id: 9, stock: 'low-stock', quantity: 3 },
    { id: 10, stock: 'in-stock', quantity: 8 },
    { id: 11, stock: 'in-stock', quantity: 25 },
    { id: 12, stock: 'in-stock', quantity: 10 },
    { id: 13, stock: 'low-stock', quantity: 4 },
    { id: 14, stock: 'in-stock', quantity: 20 },
    { id: 15, stock: 'in-stock', quantity: 12 },
    { id: 16, stock: 'in-stock', quantity: 9 },
    { id: 17, stock: 'in-stock', quantity: 15 },
    { id: 18, stock: 'low-stock', quantity: 6 },
    { id: 19, stock: 'in-stock', quantity: 14 },
    { id: 20, stock: 'in-stock', quantity: 30 },
    { id: 22, stock: 'in-stock', quantity: 11 },
    { id: 23, stock: 'low-stock', quantity: 5 },
    { id: 24, stock: 'in-stock', quantity: 7 },
    { id: 25, stock: 'in-stock', quantity: 16 },
    { id: 26, stock: 'in-stock', quantity: 20 }
];

// Get available items with stock info
function getAvailableItems() {
    return menuItems
        .filter(item => {
            const stockInfo = availableToday.find(a => a.id === item.id);
            return stockInfo && stockInfo.stock !== 'out-of-stock';
        })
        .map(item => {
            const stockInfo = availableToday.find(a => a.id === item.id);
            return { ...item, ...stockInfo };
        });
}

// Display available items
function displayAvailableItems(filter = 'all', category = 'all', searchQuery = '') {
    const itemsGrid = document.getElementById('available-items-grid');
    const noResults = document.getElementById('no-results');
    const availableCount = document.getElementById('available-count');
    
    if (!itemsGrid) return;
    
    let items = getAvailableItems();
    
    // Filter by stock status
    if (filter !== 'all') {
        items = items.filter(item => item.stock === filter);
    }
    
    // Filter by category
    if (category !== 'all') {
        items = items.filter(item => item.category === category);
    }
    
    // Filter by search query
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        items = items.filter(item => 
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
    }
    
    // Update available count
    if (availableCount) {
        availableCount.textContent = items.length;
    }
    
    // Display items or no results
    if (items.length === 0) {
        itemsGrid.innerHTML = '';
        noResults.classList.remove('d-none');
        return;
    }
    
    noResults.classList.add('d-none');
    itemsGrid.innerHTML = '';
    
    items.forEach((item, index) => {
        const delay = (index % 8) * 100;
        const stockBadgeClass = item.stock === 'in-stock' ? 'in-stock' : 'low-stock';
        const stockText = item.stock === 'in-stock' ? 'In Stock' : 'Limited Stock';
        const isDisabled = item.stock === 'out-of-stock';
        
        const itemCard = `
            <div class="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="available-item-card">
                    <div class="item-img-wrapper">
                        <img src="${item.image}" alt="${item.name}" class="item-img">
                        <span class="stock-badge ${stockBadgeClass}">
                            <i class="fas ${item.stock === 'in-stock' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                            ${stockText}
                        </span>
                        <span class="fresh-badge">
                            <i class="fas fa-fire"></i> Fresh Today
                        </span>
                    </div>
                    <div class="item-body">
                        <h3 class="item-title">${item.name}</h3>
                        <p class="item-description">${item.description}</p>
                        <div class="item-meta">
                            <span class="item-meta-item">
                                <i class="fas fa-boxes"></i>
                                ${item.quantity} available
                            </span>
                            <span class="item-meta-item">
                                <i class="fas fa-clock"></i>
                                Ready now
                            </span>
                        </div>
                        <div class="item-footer">
                            <div class="item-price">₦${item.price.toLocaleString()}</div>
                            <button class="add-to-cart-btn-available" 
                                    onclick="addToCart(${item.id})" 
                                    ${isDisabled ? 'disabled' : ''}>
                                <i class="fas fa-cart-plus"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        itemsGrid.innerHTML += itemCard;
    });
    
    // Re-initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// Setup filters for available today page
function setupAvailableTodayFilters() {
    let currentStockFilter = 'all';
    let currentCategory = 'all';
    let currentSearch = '';
    
    // Stock filter buttons
    const stockFilterBtns = document.querySelectorAll('.stock-filter-btn');
    stockFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            stockFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentStockFilter = btn.getAttribute('data-filter');
            displayAvailableItems(currentStockFilter, currentCategory, currentSearch);
        });
    });
    
    // Category tabs
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.getAttribute('data-category');
            displayAvailableItems(currentStockFilter, currentCategory, currentSearch);
        });
    });
    
    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            displayAvailableItems(currentStockFilter, currentCategory, currentSearch);
        });
    }
}

// Update current date and time
function updateDateTime() {
    const currentDateElement = document.getElementById('current-date');
    const lastUpdatedElement = document.getElementById('last-updated');
    
    if (currentDateElement) {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        currentDateElement.textContent = new Date().toLocaleDateString('en-US', options);
    }
    
    if (lastUpdatedElement) {
        const timeOptions = { 
            hour: '2-digit', 
            minute: '2-digit'
        };
        lastUpdatedElement.textContent = new Date().toLocaleTimeString('en-US', timeOptions);
    }
}

// Initialize Available Today page
function initAvailableTodayPage() {
    updateDateTime();
    displayAvailableItems();
    setupAvailableTodayFilters();
    
    // Update time every minute
    setInterval(() => {
        const lastUpdatedElement = document.getElementById('last-updated');
        if (lastUpdatedElement) {
            const timeOptions = { 
                hour: '2-digit', 
                minute: '2-digit'
            };
            lastUpdatedElement.textContent = new Date().toLocaleTimeString('en-US', timeOptions);
        }
    }, 60000);
}

// Update the main initialization to include Available Today page
// Add this to the DOMContentLoaded event listener in your existing script.js
// Inside: document.addEventListener('DOMContentLoaded', () => { ... });

/* Add this condition to your existing page detection:
 
if (currentPage.includes('available-today.html')) {
    initAvailableTodayPage();
}

*/

// ===================================
// CART MANAGEMENT
// ===================================
let cart = [];

function loadCart() {
    try {
        const savedCart = localStorage.getItem('motunKitchenCart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
    } catch (e) {
        console.error('Failed to load cart from localStorage:', e);
        cart = [];
    }
    updateCartCount();
}

function saveCart() {
    try {
        localStorage.setItem('motunKitchenCart', JSON.stringify(cart));
    } catch (e) {
        console.error('Failed to save cart to localStorage:', e);
    }
    updateCartCount();
}

function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    saveCart();
    showNotification(`${item.name} added to cart!`);
    const cartLink = document.querySelector('.cart-link');
    if (cartLink) {
        cartLink.classList.add('bounce');
        setTimeout(() => cartLink.classList.remove('bounce'), 500);
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    if (window.location.pathname.includes('cart.html')) {
        displayCartItems();
        updateOrderSummary();
    }
}

function updateQuantity(itemId, newQuantity) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(itemId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            if (window.location.pathname.includes('cart.html')) {
                displayCartItems();
                updateOrderSummary();
            }
        }
    }
}

function clearAllCart() {
    cart = [];
    saveCart();
    if (window.location.pathname.includes('cart.html')) {
        displayCartItems();
        updateOrderSummary();
    }
    showNotification('Cart has been cleared!');
}

// ===================================
// HERO SLIDER
// ===================================
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    if (slides.length === 0) return;
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    setInterval(nextSlide, 5000);
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
}

// ===================================
// MENU DISPLAY
// ===================================
function displayMenuItems(filter = 'all') {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;
    const filteredItems = filter === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === filter);
    menuGrid.innerHTML = '';
    filteredItems.forEach((item, index) => {
        const delay = (index % 8) * 100;
        const menuCard = `
            <div class="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="menu-card">
                    <div class="menu-card-img-wrapper">
                        <img src="${item.image}" alt="${item.name}" class="menu-card-img">
                        <span class="menu-card-category">${item.category}</span>
                    </div>
                    <div class="menu-card-body">
                        <h3 class="menu-card-title">${item.name}</h3>
                        <p class="menu-card-description">${item.description}</p>
                        <div class="menu-card-footer">
                            <div class="menu-card-price">₦${item.price.toLocaleString()}</div>
                            <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                                <i class="fas fa-cart-plus"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        menuGrid.innerHTML += menuCard;
    });
}

function setupCategoryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            displayMenuItems(category);
        });
    });
}

// ===================================
// CART PAGE
// ===================================
function displayCartItems() {
    const cartContainer = document.getElementById('cart-items-container');
    const emptyCart = document.getElementById('empty-cart');
    const orderSummary = document.getElementById('order-summary');
    const cartHeader = document.querySelector('.cart-header');
    if (!cartContainer) return;
    if (cart.length === 0) {
        if (cartHeader) cartHeader.style.display = 'none';
        cartContainer.style.display = 'none';
        emptyCart.classList.remove('d-none');
        if (orderSummary) orderSummary.style.display = 'none';
        return;
    }
    if (cartHeader) cartHeader.style.display = 'flex';
    cartContainer.style.display = 'block';
    emptyCart.classList.add('d-none');
    if (orderSummary) orderSummary.style.display = 'block';
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = `
            <div class="cart-item">
                <div class="row align-items-center">
                    <div class="col-md-2 col-3 mb-3 mb-md-0"><img src="${item.image}" alt="${item.name}" class="cart-item-img"></div>
                    <div class="col-md-4 col-9 mb-3 mb-md-0">
                        <h5 class="fw-bold mb-1">${item.name}</h5>
                        <small class="text-muted text-uppercase">${item.category}</small>
                    </div>
                    <div class="col-md-3 col-6 mb-3 mb-md-0">
                        <div class="quantity-control">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" onchange="updateQuantity(${item.id}, parseInt(this.value))" min="1">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                    </div>
                    <div class="col-md-2 col-4 text-end"><div class="fw-bold text-success">₦${(item.price * item.quantity).toLocaleString()}</div></div>
                    <div class="col-md-1 col-2 text-end"><i class="fas fa-trash remove-btn" onclick="removeFromCart(${item.id})" title="Remove item"></i></div>
                </div>
            </div>
        `;
        cartContainer.innerHTML += cartItem;
    });
}

function updateOrderSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = cart.length > 0 ? 400 : 0;
    const total = subtotal + deliveryFee;
    const subtotalElement = document.getElementById('subtotal');
    const deliveryElement = document.getElementById('delivery-fee');
    const totalElement = document.getElementById('total');
    if (subtotalElement) subtotalElement.textContent = subtotal.toLocaleString();
    if (deliveryElement) deliveryElement.textContent = deliveryFee.toLocaleString();
    if (totalElement) totalElement.textContent = total.toLocaleString();
}

function setupCheckout() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (!checkoutBtn) return;
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        let message = "Hello Motun's Kitchen! I would like to place an order:\n\n";
        cart.forEach(item => {
            message += `${item.quantity}x ${item.name} @ ₦${item.price.toLocaleString()} each = ₦${(item.price * item.quantity).toLocaleString()}\n`;
        });
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const deliveryFee = 400;
        const total = subtotal + deliveryFee;
        message += `\nSubtotal: ₦${subtotal.toLocaleString()}`;
        message += `\nDelivery Fee: ₦${deliveryFee.toLocaleString()}`;
        message += `\n*Total: ₦${total.toLocaleString()}*`;
        message += `\n\nPlease confirm my order. Thank you!`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/2347026325803?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    });
}

// ===================================
// NAVBAR SCROLL EFFECT & OTHER UI
// ===================================
function initNavbarScroll() {
    const navbar = document.getElementById('mainNav');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 100);
    });
}

function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (!scrollBtn) return;
    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('show', window.scrollY > 300);
    });
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, easing: 'ease-in-out', once: true, offset: 100 });
    }
}

// ===================================
// REVIEW MANAGEMENT (FIREBASE VERSION)
// ===================================
function createStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<i class="${i <= rating ? 'fas' : 'far'} fa-star"></i>`;
    }
    return stars;
}

function createReviewCard(review) {
    // Firestore stores timestamps; we need to convert them to JS Date objects
    const reviewDate = review.date.toDate().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    return `
        <div class="col-md-6 col-lg-4" data-aos="fade-up">
            <div class="review-card-modern">
                <div class="review-header">
                    <div class="reviewer-avatar"><i class="fas fa-user"></i></div>
                    <div class="reviewer-info"><h5 class="reviewer-name">${review.name}</h5></div>
                </div>
                <div class="review-rating">${createStarRating(review.rating)}</div>
                <p class="review-text">${review.comment}</p>
                <div class="review-footer">
                    <span class="review-date"><i class="far fa-clock"></i> ${reviewDate}</span>
                    <div class="review-verified"><i class="fas fa-check-circle"></i> Verified Review</div>
                </div>
            </div>
        </div>
    `;
}

async function displayReviews() {
    const reviewsGrid = document.getElementById('reviews-grid');
    if (!reviewsGrid) return;

    reviewsGrid.innerHTML = '<p class="text-center col-12">Loading reviews...</p>';

    try {
        // Query reviews and order them by date, newest first
        const querySnapshot = await reviewsCollection.orderBy("date", "desc").get();
        
        if (querySnapshot.empty) {
            reviewsGrid.innerHTML = '<p class="text-center col-12">No reviews yet. Be the first to write one!</p>';
            return;
        }

        reviewsGrid.innerHTML = '';
        querySnapshot.forEach(doc => {
            reviewsGrid.innerHTML += createReviewCard(doc.data());
        });
        // Re-initialize AOS to animate the newly added cards
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    } catch (error) {
        console.error("Error fetching reviews:", error);
        reviewsGrid.innerHTML = '<p class="text-center col-12 text-danger">Could not load reviews at this time.</p>';
    }
}

function setupReviewForm() {
    const reviewForm = document.getElementById('review-form');
    if (!reviewForm) return;

    reviewForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(reviewForm);
        const newReview = {
            name: formData.get('name'),
            email: formData.get('email'),
            rating: parseInt(formData.get('rating')),
            comment: formData.get('comment'),
            date: firebase.firestore.FieldValue.serverTimestamp() // Use server timestamp
        };
        
        if (!newReview.name || !newReview.rating || !newReview.comment) {
            alert("Please fill out all required fields.");
            return;
        }

        const submitBtn = reviewForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        try {
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> SUBMITTING...';
            submitBtn.disabled = true;

            // Add a new document with a generated id to the 'reviews' collection
            await reviewsCollection.add(newReview);

            document.getElementById('form-success').classList.remove('d-none');
            document.getElementById('form-error').classList.add('d-none');
            reviewForm.reset();

            // Refresh the reviews list to show the new one
            await displayReviews();

            setTimeout(() => {
                document.getElementById('form-success').classList.add('d-none');
            }, 5000);

        } catch (error) {
            console.error("Error submitting review:", error);
            document.getElementById('form-error').classList.remove('d-none');
            document.getElementById('form-success').classList.add('d-none');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// ===================================
// GENERAL INITIALIZATION
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });
}

function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .cart-notification {
            position: fixed; top: 100px; right: -300px; background: linear-gradient(135deg, #008751, #006d41);
            color: white; padding: 1rem 1.5rem; border-radius: 10px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            display: flex; align-items: center; gap: 0.75rem; z-index: 9999;
            transition: right 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55); font-weight: 600;
        }
        .cart-notification.show { right: 20px; }
        .cart-notification i { font-size: 1.3rem; color: #FFD700; }
        .cart-link.bounce { animation: cartBounce 0.5s ease; }
        @keyframes cartBounce {
            0%, 100% { transform: scale(1); } 25% { transform: scale(1.2); }
            50% { transform: scale(0.9); } 75% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);
}

// ===================================
// PAGE-SPECIFIC INITIALIZERS
// ===================================
function initHomePage() {
    displayMenuItems();
    setupCategoryFilter();
    initHeroSlider();
}

function initCartPage() {
    displayCartItems();
    updateOrderSummary();
    setupCheckout();
}

function initReviewsPage() {
    displayReviews();
    setupReviewForm();
}

// ===================================
// MAIN INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    addNotificationStyles();
    initNavbarScroll();
    initScrollToTop();
    initAOS();
    initSmoothScroll();

    const currentPage = window.location.pathname;
    if (currentPage.includes('index.html') || currentPage.endsWith('/')) {
        initHomePage();
    } else if (currentPage.includes('cart.html')) {
        initCartPage();
    } else if (currentPage.includes('reviews.html')) {
        initReviewsPage();
    } else if (currentPage.includes('available-today.html')) {
        initAvailableTodayPage(); 
    }
});





