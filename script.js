document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       SAFE NAVBAR SCROLL EFFECT
    =============================== */
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    /* ===============================
       MOBILE MENU (SAFE)
    =============================== */
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            hamburger.classList.toggle("active");
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu?.classList.remove("active");
            hamburger?.classList.remove("active");
        });
    });

    /* ===============================
       MENU DATA
    =============================== */
    const menuItems = [
        {
            name: "Classic Vanialla cake",
            description: 'Delicious vanilla cake with smooth buttercream frosting',
            price: 750,
            category: "cakes",
            image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop'
        },
        {
            name: "Chocolate Truffle Cake",
            description: "Rich chocolate cake with smooth truffle frosting",
            price: 850,
            category: "cakes",
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
        },
        {
            name: "Red Velvet Cake",
            description: "Classic red velvet with cream cheese frosting",
            price: 950,
            category: "cakes",
            image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7"
        },
        {
            name: "Fudge Brownie",
            description: "Dense, moist &  fudge chocolate brownie bites",
            price: 120,
            category: "brownies",
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
        },
        {
            name: "Chocolate Cupcake",
            description: "Soft cupcake topped with chocolate buttercream",
            price: 90,
            category: "cupcakes",
            image: "https://images.unsplash.com/photo-1519869325930-281384150729"
        },
        {
            name: "Red Velvet Cupcake",
            description: "red velvet flavoured cupcakes frosted with creamy topping",
            price: 90,
            category: "cupcakes",
            image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7"
        },
        {
            name: "Butter Cookies",
            description: "Crispy butter cookies with rich flavor of pure butter",
            price: 200,
            category: "cookies",
            image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e"
        },
        {
            name: "Crispy Puffs",
            description: "Crispy and crunchy puffs filled with spicy masala ",
            price: 110,
            category: "pastries",
            image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a"
        },
        {
            name: "Cheese Cake Slices ",
            description: "Most Delicious & cheesy slices that melts into your mouth",
            price: 499,
            category: "desserts",
            image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50"
        }

    ];

    /* ===============================
       MENU RENDERING
    =============================== */
    const menuGrid = document.getElementById("menuGrid");
    const tabButtons = document.querySelectorAll(".tab-btn");
    const WHATSAPP_NUMBER = "+91 8248151385";

    if (!menuGrid) return; // Safety exit

    function renderMenu(category = "all") {
        menuGrid.innerHTML = "";

        const filteredItems =
            category === "all"
                ? menuItems
                : menuItems.filter(item => item.category === category);

        filteredItems.forEach(item => {
            const card = document.createElement("div");
            card.className = "menu-item";

            const message = encodeURIComponent(
                `Hello! I would like to order:\n${item.name}\nPrice: ₹${item.price}`
            );

            card.innerHTML = `
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="menu-item-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="menu-item-price">₹${item.price}</div> <br>
                    <a href="https://wa.me/918248151385?text=Hello%20Whisk%20%26%20Oven!%20🍰%20I%20would%20love%20to%20order%20some%20of%20your%20handcrafted%20treats%20to%20sweeten%20my%20day!%20✨" target="_blank" class="order-btn-bright">Order Now </a>
                </div>
            `;
            menuGrid.appendChild(card);
        });
    }

    /* ===============================
       TAB FILTERING
    =============================== */
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderMenu(btn.dataset.category);
        });
    });

    /* ===============================
       INITIAL LOAD
    =============================== */
    renderMenu();
});
