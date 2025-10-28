//--- START OF FILE script.js ---

/* ===================================
   MOTUN'S KITCHEN - JAVASCRIPT
   Modern Nigerian Food Menu Website
   =================================== */

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
        category: "sides",
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
        category: "mains",
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

// ===================================
// CART MANAGEMENT
// ===================================
let cart = [];

function loadCart() {
    try {
        const savedCart = localStorage.getItem('motunKitchenCart');
        console.log('Attempting to load cart from localStorage:', savedCart ? 'Found data' : 'No data');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            console.log('Cart loaded successfully. Length:', cart.length);
        } else {
            cart = [];
            console.log('No saved cart found, starting empty.');
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
        console.log('Cart saved to localStorage. Length:', cart.length);
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

/**
 * Shows a notification message on the screen.
 * @param {string} message The message to display.
 */
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Animate out and remove
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500); // Wait for transition to finish
    }, 3000);
}


function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    const existingItem = cart.find(cartItem => cartItem.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }

    saveCart();
    showNotification(`${item.name} added to cart!`);

    // Animate cart icon
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

/**
 * Clears all items from the cart.
 */
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

    // Auto advance slides
    setInterval(nextSlide, 5000);

    // Dot navigation
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

    if (!cartContainer) {
        console.error('Cart container (#cart-items-container) not found on page!');
        return;
    }
    console.log('displayCartItems called. Cart length:', cart.length);

    if (cart.length === 0) {
        console.log('Cart is empty - showing empty state.');
        if(cartHeader) cartHeader.style.display = 'none';
        cartContainer.style.display = 'none';
        emptyCart.classList.remove('d-none');
        if (orderSummary) orderSummary.style.display = 'none';
        return;
    }
    
    console.log('Cart has items - populating display.');
    if(cartHeader) cartHeader.style.display = 'flex';
    cartContainer.style.display = 'block';
    emptyCart.classList.add('d-none');
    if (orderSummary) orderSummary.style.display = 'block';

    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = `
            <div class="cart-item">
                <div class="row align-items-center">
                    <div class="col-md-2 col-3 mb-3 mb-md-0">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    </div>
                    <div class="col-md-4 col-9 mb-3 mb-md-0">
                        <h5 class="fw-bold mb-1">${item.name}</h5>
                        <small class="text-muted text-uppercase">${item.category}</small>
                    </div>
                    <div class="col-md-3 col-6 mb-3 mb-md-0">
                        <div class="quantity-control">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" 
                                   onchange="updateQuantity(${item.id}, parseInt(this.value))" min="1">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                    </div>
                    <div class="col-md-2 col-4 text-end">
                        <div class="fw-bold text-success">₦${(item.price * item.quantity).toLocaleString()}</div>
                    </div>
                    <div class="col-md-1 col-2 text-end">
                        <i class="fas fa-trash remove-btn" onclick="removeFromCart(${item.id})" title="Remove item"></i>
                    </div>
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
// NAVBAR SCROLL EFFECT
// ===================================
function initNavbarScroll() {
    const navbar = document.getElementById('mainNav');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===================================
// SCROLL TO TOP BUTTON
// ===================================
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// ANIMATION ON SCROLL
// ===================================
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
}

// ===================================
// REVIEW FORM
// ===================================
function setupReviewForm() {
    const reviewForm = document.getElementById('review-form');
    if (!reviewForm) return;

    reviewForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(reviewForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const rating = formData.get('rating');
        const comment = formData.get('comment');

        const submitBtn = reviewForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        try {
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> SUBMITTING...';
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success message
            document.getElementById('form-success').classList.remove('d-none');
            document.getElementById('form-error').classList.add('d-none');
            reviewForm.reset();

            setTimeout(() => {
                document.getElementById('form-success').classList.add('d-none');
            }, 5000);

        } catch (error) {
            document.getElementById('form-error').classList.remove('d-none');
            document.getElementById('form-success').classList.add('d-none');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
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
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// ADD NOTIFICATION STYLES DYNAMICALLY
// ===================================
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .cart-notification {
            position: fixed;
            top: 100px;
            right: -300px;
            background: linear-gradient(135deg, #008751, #006d41);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            z-index: 9999;
            transition: right 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            font-weight: 600;
        }
        
        .cart-notification.show {
            right: 20px;
        }
        
        .cart-notification i {
            font-size: 1.3rem;
            color: #FFD700;
        }
        
        .cart-link.bounce {
            animation: cartBounce 0.5s ease;
        }
        
        @keyframes cartBounce {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.2); }
            50% { transform: scale(0.9); }
            75% { transform: scale(1.1); }
        }
        
        @media (max-width: 768px) {
            .cart-notification {
                right: -250px;
                font-size: 0.9rem;
                padding: 0.75rem 1rem;
            }
            
            .cart-notification.show {
                right: 10px;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===================================
// PAGE LOAD ANIMATIONS
// ===================================
function initPageAnimations() {
    // Fade in page content
    document.body.style.opacity = '0';
    window.addEventListener('load', () => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    });
}

// ===================================
// MOBILE MENU CLOSE ON LINK CLICK
// ===================================
function initMobileMenuClose() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
}

// ===================================
// LAZY LOAD IMAGES
// ===================================
function initLazyLoad() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===================================
// UTILITY FUNCTIONS
// ===================================
function formatCurrency(amount) {
    return `₦${amount.toLocaleString()}`;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===================================
// CONSOLE WELCOME MESSAGE
// ===================================
function showWelcomeMessage() {
    const styles = [
        'color: #008751',
        'font-size: 20px',
        'font-weight: bold',
        'text-shadow: 2px 2px 4px rgba(0,0,0,0.2)'
    ].join(';');

    console.log('%c🍲 Welcome to Motun\'s Kitchen! 🍲', styles);
    console.log('%cAuthentic Nigerian Cuisine Delivered Fresh', 'color: #FFD700; font-size: 14px;');
    console.log('%cWebsite by Motun\'s Kitchen © 2025', 'color: #6C757D; font-size: 12px;');
}

// ===================================
// KEYBOARD NAVIGATION
// ===================================
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Escape key to close mobile menu
        if (e.key === 'Escape') {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
}

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
function optimizePerformance() {
    // Preload critical images
    const criticalImages = [
        '/asset/logo.png'
    ];

    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// ===================================
// DETECT USER PREFERENCES
// ===================================
function detectUserPreferences() {
    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        document.body.classList.add('reduced-motion');
        // Disable AOS animations
        if (typeof AOS !== 'undefined') {
            AOS.init({ disable: true });
        }
    }
}

// ===================================
// ERROR HANDLING
// ===================================
function setupErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('An error occurred:', e.error);
        // You can add custom error reporting here
    });

    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
        // You can add custom error reporting here
    });
}

// ===================================
// ANALYTICS (OPTIONAL)
// ===================================
function trackEvent(eventName, eventData = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);

    // Example: Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
}

// ===================================
// INITIALIZE ON DIFFERENT PAGES
// ===================================
function initHomePage() {
    displayMenuItems();
    setupCategoryFilter();
    initHeroSlider();
}

function initCartPage() {
    console.log('initCartPage called. Current pathname:', window.location.pathname);
    console.log('Cart length before display:', cart.length);
    loadCart(); // Force reload for safety
    displayCartItems();
    updateOrderSummary();
    setupCheckout();
    // The clear cart button uses onclick in the HTML, so no event listener setup is needed here.
}

function initReviewsPage() {
    setupReviewForm();
}

function initAboutPage() {
    // About page specific initialization
    console.log('About page initialized');
}

// ===================================
// MAIN INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Load cart data
    loadCart();
    console.log('DOM loaded. Cart length after initial load:', cart.length);

    // Add notification styles
    addNotificationStyles();

    // Initialize common features
    initNavbarScroll();
    initScrollToTop();
    initAOS();
    initSmoothScroll();
    initMobileMenuClose();
    initKeyboardNavigation();
    detectUserPreferences();
    setupErrorHandling();
    optimizePerformance();

    // Show welcome message
    showWelcomeMessage();

    // Page-specific initialization
    const currentPage = window.location.pathname;
    console.log('Detected page:', currentPage);

    if (currentPage.includes('index.html') || currentPage.endsWith('/') || currentPage === '') {
        initHomePage();
    } else if (currentPage.includes('cart.html')) {
        // Small delay to ensure DOM is fully ready on Netlify
        setTimeout(() => {
            initCartPage();
        }, 100);
    } else if (currentPage.includes('reviews.html')) {
        initReviewsPage();
    } else if (currentPage.includes('about.html')) {
        initAboutPage();
    }

    // Track page view
    trackEvent('page_view', { page: currentPage });
});

// ===================================
// WINDOW LOAD EVENT
// ===================================
window.addEventListener('load', () => {
    // Initialize lazy loading
    initLazyLoad();

    // Remove loading class if exists
    document.body.classList.remove('loading');
});

// ===================================
// WINDOW RESIZE HANDLER
// ===================================
const handleResize = debounce(() => {
    // Handle responsive adjustments
    if (window.innerWidth > 992) {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    }
}, 250);

window.addEventListener('resize', handleResize);

// ===================================
// BEFORE UNLOAD (OPTIONAL)
// ===================================
window.addEventListener('beforeunload', (e) => {
    // Save any pending data
    saveCart();
});

// ===================================
// SERVICE WORKER REGISTRATION (OPTIONAL)
// ===================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker for PWA
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed:', err));
    });
}

// ===================================
// EXPORT FUNCTIONS (FOR TESTING)
// ===================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addToCart,
        removeFromCart,
        updateQuantity,
        formatCurrency,
        menuItems
    };

}
