// Cart State Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
// Welcome Popup - Show only on first visit
function showWelcomePopup() {
    const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup');
    if (!hasSeenPopup) {
        const popup = document.getElementById('welcomePopup');
        if (popup) {
            setTimeout(() => {
                popup.classList.add('active');
                document.body.style.overflow = 'hidden';
            }, 500);
        }     } }
function closeWelcomePopup() {
    const popup = document.getElementById('welcomePopup');
    if (popup) {
        popup.classList.remove('active');
        document.body.style.overflow = '';
        localStorage.setItem('hasSeenWelcomePopup', 'true');
    } }
// Popup event listeners
document.addEventListener('DOMContentLoaded', () => {
    const popupClose = document.getElementById('popupClose');
    const popupOverlay = document.querySelector('.popup-overlay');
    const exploreMenuBtn = document.getElementById('exploreMenuBtn');
    const orderNowBtn = document.getElementById('orderNowBtn');
    if (popupClose) {
        popupClose.addEventListener('click', closeWelcomePopup);
    }
    if (popupOverlay) {
        popupOverlay.addEventListener('click', closeWelcomePopup);
    }
    if (exploreMenuBtn) {
        exploreMenuBtn.addEventListener('click', () => {
            closeWelcomePopup();
        });    }
    if (orderNowBtn) {
        orderNowBtn.addEventListener('click', () => {
            closeWelcomePopup();
        });
    }
    // Show popup on first visit
    showWelcomePopup();
});
// Enhanced Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
});
// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});
// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Menu Items Data with Images
const menuItems = [
    // Cakes
    {
        id: 1,
        name: 'Classic Vanilla Cake',
        description: 'Delicious vanilla cake with smooth buttercream frosting, perfect for any occasion',
        price: 32.00,
        category: 'cakes',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop'
    },
    {
        id: 2,
        name: 'Chocolate Truffle Cake',
        description: 'Rich and decadent chocolate cake with truffle ganache and chocolate shavings',
        price: 38.00,
        category: 'cakes',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'
    },
    {
        id: 3,
        name: 'Red Velvet Cake',
        description: 'Classic red velvet cake with cream cheese frosting and red velvet crumbs',
        price: 36.00,
        category: 'cakes',
        image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=400&fit=crop&q=80'
    },
    
    // Brownies & Bars
    {
        id: 4,
        name: 'Fudgy Chocolate Brownie',
        description: 'Rich, fudgy chocolate brownie with a perfect chewy texture',
        price: 5.00,
        category: 'brownies',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop'
    },
    {
        id: 5,
        name: 'Walnut Brownie',
        description: 'Fudgy chocolate brownie loaded with crunchy walnuts',
        price: 5.50,
        category: 'brownies',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop&q=90'
    },
    {
        id: 7,
        name: 'Choco-Chip Brownie',
        description: 'Classic brownie with chocolate chips for extra indulgence',
        price: 5.50,
        category: 'brownies',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop&q=90'
    },
    // Cupcakes
    {
        id: 8,
        name: 'Vanilla Buttercream Cupcake',
        description: 'Moist vanilla cupcake topped with smooth vanilla buttercream frosting',
        price: 3.50,
        category: 'cupcakes',
        image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 9,
        name: 'Chocolate Ganache Cupcake',
        description: 'Rich chocolate cupcake with decadent chocolate ganache topping',
        price: 4.00,
        category: 'cupcakes',
        image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 10,
        name: 'Red Velvet Cupcake',
        description: 'Classic red velvet cupcake with cream cheese frosting',
        price: 4.00,
        category: 'cupcakes',
        image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=300&fit=crop'
    },
    // Cookies
    {
        id: 11,
        name: 'Chocolate Chip Cookies',
        description: 'Classic cookies with chunks of premium dark chocolate',
        price: 2.50,
        category: 'cookies',
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop'
    },
    {
        id: 12,
        name: 'Butter Cookies',
        description: 'Rich, buttery cookies with a melt-in-your-mouth texture',
        price: 2.50,
        category: 'cookies',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 13,
        name: 'Oatmeal Cookies',
        description: 'Chewy oatmeal cookies with a hint of cinnamon and plump raisins',
        price: 2.50,
        category: 'cookies',
        image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop&q=80'
    },
    // Pastries
    {
        id: 14,
        name: 'Chocolate Pastry',
        description: 'Flaky pastry filled with rich chocolate cream and topped with chocolate glaze',
        price: 4.50,
        category: 'pastries',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 15,
        name: 'Pineapple Pastry',
        description: 'Sweet pineapple filling in a buttery, flaky pastry shell',
        price: 4.00,
        category: 'pastries',
        image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop&q=80'
    },
    {
        id: 16,
        name: 'Black Forest Pastry',
        description: 'Chocolate pastry with cherry filling and whipped cream, inspired by Black Forest cake',
        price: 4.50,
        category: 'pastries',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop&q=80'
    },
    // Desserts & Specials
    {
        id: 17,
        name: 'Cheesecake Slices',
        description: 'Creamy New York style cheesecake with a graham cracker crust',
        price: 6.00,
        category: 'desserts',
        image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=300&fit=crop'
    },
    {
        id: 18,
        name: 'Muffins',
        description: 'Freshly baked muffins available in blueberry, chocolate chip, and banana nut',
        price: 3.50,
        category: 'desserts',
        image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop'
    },
    {
        id: 19,
        name: 'Cake Pops',
        description: 'Bite-sized cake pops coated in chocolate, available in assorted flavors',
        price: 3.00,
        category: 'desserts',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop&q=90'

    }
];

// Render Menu Items
function renderMenuItems(category = 'all') {
    const menuGrid = document.getElementById('menuGrid');
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item" data-id="${item.id}">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23d4a574%22 width=%22400%22 height=%22300%22/%3E%3Ctext fill=%22%23fff%22 font-size=%2250%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E${item.name.charAt(0)}%3C/text%3E%3C/svg%3E'">
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${item.id})">Add to Cart</button>
            </div>
            <div class="menu-item-content" onclick="addToCart(${item.id})" style="cursor: pointer;">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-price">$${item.price.toFixed(2)}</div>
            </div>
        </div>
    `).join('');
}

// Cart Functions - CRUD Operations
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

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
    updateCartUI();
    showCartNotification();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartUI();
}

function updateQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
}

function showCartNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = 'Item added to cart!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Cart Sidebar Toggle
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');

cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeCart.addEventListener('click', closeCartSidebar);
cartOverlay.addEventListener('click', closeCartSidebar);

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Checkout Functionality
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutForm = document.getElementById('checkoutForm');

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    openCheckoutModal();
});

closeCheckout.addEventListener('click', closeCheckoutModal);

function openCheckoutModal() {
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCheckoutItems();
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
}

function renderCheckoutItems() {
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutTotal.textContent = total.toFixed(2);
    
    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
}

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    
    if (!name || !email || !phone || !address) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Process order
    const order = {
        customer: { name, email, phone, address },
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toISOString()
    };
    
    // Save order to localStorage (in real app, this would go to a server)
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartUI();
    closeCartSidebar();
    closeCheckoutModal();
    checkoutForm.reset();
    alert(`Thank you, ${name}! Your order has been placed. Total: $${order.total.toFixed(2)}`);
});
// Tab Button Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');
        renderMenuItems(category);
    });
});
// Initialize
renderMenuItems();
updateCartCount();
updateCartUI();
// Navbar scroll effect is handled above in the Enhanced Navbar Scroll Effect section
// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);