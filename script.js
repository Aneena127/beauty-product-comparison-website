// Store icon mapping
const storeIcons = {
    "Nykaa": "fas fa-shopping-bag",
    "Flipkart": "fas fa-cart-shopping",
    "Amazon India": "fas fa-amazon",
    "BigBasket": "fas fa-basket-shopping"
};



// Store URL mapping function
function getStoreUrl(site, productName) {
    const searchQuery = encodeURIComponent(productName);
    const storeUrls = {
        "Nykaa": `https://www.nykaa.com/beauty/search/result/?q=${searchQuery}`,
        "Flipkart": `https://www.flipkart.com/search?q=${searchQuery}`,
        "Amazon India": `https://www.amazon.in/s?k=${searchQuery}`,
        "BigBasket": `https://www.bigbasket.com/search/?q=${searchQuery}`
    };
    return storeUrls[site] || '#';
}

// Sample product data with prices from different Indian websites
const productsData = [
    {
        id: 1,
        name: "Radiant Glow Foundation",
        brand: "Lakmé",
        category: "makeup",
        description: "Medium coverage foundation with natural finish for all skin types",
        prices: [
            { site: "Nykaa", originalPrice: 1200, discountedPrice: 960 },
            { site: "Flipkart", originalPrice: 1150, discountedPrice: 920 },
            { site: "Amazon India", originalPrice: 1100, discountedPrice: 880 },
            { site: "BigBasket", originalPrice: 1250, discountedPrice: 1000 }
        ]
    },
    {
        id: 2,
        name: "Hydra-Boost Serum",
        brand: "Mamaearth",
        category: "skincare",
        description: "Intensive hydrating serum with hyaluronic acid and vitamin C",
        prices: [
            { site: "Nykaa", originalPrice: 1800, discountedPrice: 1440 },
            { site: "Flipkart", originalPrice: 1750, discountedPrice: 1400 },
            { site: "Amazon India", originalPrice: 1700, discountedPrice: 1360 }
        ]
    },
    {
        id: 3,
        name: "Velvet Matte Lipstick",
        brand: "Maybelline",
        category: "makeup",
        description: "Long-lasting matte lipstick in rich, pigmented shades",
        prices: [
            { site: "Nykaa", originalPrice: 350, discountedPrice: 280 },
            { site: "Flipkart", originalPrice: 320, discountedPrice: 256 },
            { site: "Amazon India", originalPrice: 300, discountedPrice: 240 },
            { site: "BigBasket", originalPrice: 360, discountedPrice: 288 }
        ]
    },
    {
        id: 4,
        name: "Retinol Night Cream",
        brand: "The Derma Co",
        category: "skincare",
        description: "Anti-aging night cream with 0.5% retinol for smooth skin",
        prices: [
            { site: "Nykaa", originalPrice: 2000, discountedPrice: 1600 },
            { site: "Flipkart", originalPrice: 1950, discountedPrice: 1560 },
            { site: "Amazon India", originalPrice: 1900, discountedPrice: 1520 }
        ]
    },
    {
        id: 5,
        name: "Masterpiece Mascara",
        brand: "L'Oréal Paris",
        category: "makeup",
        description: "Volumizing and lengthening mascara for dramatic lashes",
        prices: [
            { site: "Nykaa", originalPrice: 650, discountedPrice: 520 },
            { site: "Flipkart", originalPrice: 620, discountedPrice: 496 },
            { site: "Amazon India", originalPrice: 600, discountedPrice: 480 },
            { site: "BigBasket", originalPrice: 680, discountedPrice: 544 }
        ]
    },
    {
        id: 6,
        name: "Vitamin C Brightening Moisturizer",
        brand: "Glow & Lovely",
        category: "skincare",
        description: "Daily moisturizer with vitamin C for radiant, even-toned skin",
        prices: [
            { site: "Nykaa", originalPrice: 1200, discountedPrice: 960 },
            { site: "Flipkart", originalPrice: 1150, discountedPrice: 920 },
            { site: "Amazon India", originalPrice: 1100, discountedPrice: 880 },
            { site: "BigBasket", originalPrice: 1250, discountedPrice: 1000 }
        ]
    },
    {
        id: 7,
        name: "Perfecting Powder Foundation",
        brand: "Ponds",
        category: "makeup",
        description: "Mineral-based powder foundation for buildable coverage",
        prices: [
            { site: "Nykaa", originalPrice: 950, discountedPrice: 760 },
            { site: "Flipkart", originalPrice: 900, discountedPrice: 720 },
            { site: "Amazon India", originalPrice: 850, discountedPrice: 680 }
        ]
    },
    {
        id: 8,
        name: "Nourishing Face Oil",
        brand: "Biotique",
        category: "skincare",
        description: "Luxurious face oil with jojoba, rosehip, and argan oils",
        prices: [
            { site: "Nykaa", originalPrice: 1500, discountedPrice: 1200 },
            { site: "Flipkart", originalPrice: 1450, discountedPrice: 1160 },
            { site: "Amazon India", originalPrice: 1400, discountedPrice: 1120 }
        ]
    },
    {
        id: 9,
        name: "Smoky Eye Palette",
        brand: "Colorbar",
        category: "makeup",
        description: "12-shade eyeshadow palette with matte and shimmer finishes",
        prices: [
            { site: "Nykaa", originalPrice: 1300, discountedPrice: 1040 },
            { site: "Flipkart", originalPrice: 1250, discountedPrice: 1000 },
            { site: "Amazon India", originalPrice: 1200, discountedPrice: 960 },
            { site: "BigBasket", originalPrice: 1350, discountedPrice: 1080 }
        ]
    },
    {
        id: 10,
        name: "Gentle Cleansing Balm",
        brand: "Minimalist",
        category: "skincare",
        description: "Makeup removing cleansing balm for all skin types",
        prices: [
            { site: "Nykaa", originalPrice: 800, discountedPrice: 640 },
            { site: "Flipkart", originalPrice: 750, discountedPrice: 600 },
            { site: "Amazon India", originalPrice: 700, discountedPrice: 560 },
            { site: "BigBasket", originalPrice: 850, discountedPrice: 680 }
        ]
    }
];

// Global variables
let currentProducts = [...productsData];
let currentCategory = 'all';
let currentSort = 'name';
let currentPriceRange = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    renderProducts();
});

// Initialize all event listeners
function initializeEventListeners() {
    // Category navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            filterAndRenderProducts();
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    
    searchInput.addEventListener('input', function() {
        clearSearch.style.display = this.value ? 'block' : 'none';
        filterAndRenderProducts();
    });

    clearSearch.addEventListener('click', function() {
        searchInput.value = '';
        this.style.display = 'none';
        filterAndRenderProducts();
    });

    // Sort functionality
    document.getElementById('sortBy').addEventListener('change', function() {
        currentSort = this.value;
        filterAndRenderProducts();
    });

    // Price range filter
    document.getElementById('priceRange').addEventListener('change', function() {
        currentPriceRange = this.value;
        filterAndRenderProducts();
    });
}

// Filter and render products based on current criteria
function filterAndRenderProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    currentProducts = productsData.filter(product => {
        // Category filter
        if (currentCategory !== 'all' && product.category !== currentCategory) {
            return false;
        }
        
        // Search filter
        if (searchTerm && !product.name.toLowerCase().includes(searchTerm) && 
            !product.brand.toLowerCase().includes(searchTerm) &&
            !product.description.toLowerCase().includes(searchTerm)) {
            return false;
        }
        
        // Price range filter
        const lowestPrice = Math.min(...product.prices.map(p => p.discountedPrice));
        if (currentPriceRange !== 'all') {
            const [min, max] = currentPriceRange.split('-').map(p => p === '+' ? Infinity : parseFloat(p));
            if (max === undefined) {
                if (lowestPrice < min) return false;
            } else {
                if (lowestPrice < min || lowestPrice > max) return false;
            }
        }
        
        return true;
    });
    
    sortProducts();
    renderProducts();
}

// Sort products based on current sort criteria
function sortProducts() {
    currentProducts.sort((a, b) => {
        switch (currentSort) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'price-low':
                const minPriceA = Math.min(...a.prices.map(p => p.discountedPrice));
                const minPriceB = Math.min(...b.prices.map(p => p.discountedPrice));
                return minPriceA - minPriceB;
            case 'price-high':
                const maxPriceA = Math.min(...a.prices.map(p => p.discountedPrice));
                const maxPriceB = Math.min(...b.prices.map(p => p.discountedPrice));
                return maxPriceB - maxPriceA;
            case 'sites':
                return b.prices.length - a.prices.length;
            default:
                return 0;
        }
    });
}

// Render products to the DOM
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const resultsCount = document.getElementById('resultsCount');
    
    // Update results count
    resultsCount.textContent = `Found ${currentProducts.length} product${currentProducts.length !== 1 ? 's' : ''}`;
    
    if (currentProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = currentProducts.map(product => createProductCard(product)).join('');
}

// Create HTML for a product card
function createProductCard(product) {
    const lowestPrice = Math.min(...product.prices.map(p => p.discountedPrice));
    const categoryClass = `category-${product.category}`;
    
    const pricesHTML = product.prices.map(priceItem => {
        const isBestPrice = priceItem.discountedPrice === lowestPrice;
        const storeUrl = getStoreUrl(priceItem.site, product.name);
        const iconClass = storeIcons[priceItem.site] || 'fas fa-store';
        
        return `
            <a href="${storeUrl}" target="_blank" rel="noopener noreferrer" class="price-item-link">
                <div class="price-item ${isBestPrice ? 'best-price' : ''}">
                    <div class="price-site">
                        <div class="site-icon">
                            <i class="${iconClass}"></i>
                        </div>
                        <span class="site-name">${priceItem.site}</span>
                        ${isBestPrice ? '<span class="best-price-badge">BEST PRICE</span>' : ''}
                    </div>
                    <div class="price-details">
                        <span class="original-price">₹${priceItem.originalPrice}</span>
                        <span class="discounted-price">₹${priceItem.discountedPrice}</span>
                        <span class="visit-badge"><i class="fas fa-external-link-alt"></i> Visit Store</span>
                    </div>
                </div>
            </a>
        `;
    }).join('');
    
    return `
        <div class="product-card">
            <div class="product-header">
                <span class="product-category ${categoryClass}">${product.category}</span>
            </div>
            <div class="product-brand">${product.brand}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="prices-section">
                <div class="prices-header">Available at ${product.prices.length} store${product.prices.length !== 1 ? 's' : ''}:</div>
                ${pricesHTML}
            </div>
        </div>
    `;
}
