# DEAL DIVA - Price Comparison Website

## Overview
**DEAL DIVA** is an online price comparison website that helps users find the best deals across multiple e-commerce platforms. Compare prices, find the cheapest products, and get direct links to various online stores.

## Features

### 🔍 **Advanced Search**
- Search for products by name, brand, or description
- Real-time search results
- Clear search functionality

### 🏷️ **Price Comparison**
- Compare prices across multiple online stores:
  - Nykaa
  - Flipkart
  - Amazon India
  - BigBasket
- View original and discounted prices
- Identify best price deals with "BEST PRICE" badge

### 🎯 **Product Filtering**
- Filter by category (Makeup, Skincare)
- Filter by price range:
  - Under ₹2000
  - ₹2000 - ₹4000
  - ₹4000 - ₹8000
  - Over ₹8000

### 📊 **Sorting Options**
- Sort by Product Name
- Sort by Price (Low to High)
- Sort by Price (High to Low)
- Sort by Number of Available Stores

### 🛍️ **Direct Store Links**
- Click on any store to visit and purchase directly
- One-click access to products on respective platforms
- Opens in new tab for better browsing experience

### 💫 **Beautiful UI**
- Modern gradient design
- Responsive layout for all devices
- Smooth animations and hover effects
- Easy-to-read product cards

## Project Structure

```
project 1/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── styles.css          # CSS styling and layout
├── logo.png            # Website logo
└── README.md           # This file
```

## How to Use

### 1. **Open the Website**
- Double-click `index.html` to open in your default browser
- Or right-click and select "Open with" to choose a specific browser

### 2. **Browse Products**
- View all 10 sample products on the homepage
- Products are displayed as cards with brand, price, and store information

### 3. **Search for Products**
- Use the search box to find products by name or brand
- Results update in real-time
- Click the X button to clear search

### 4. **Filter by Category**
- Click "All Products" to see all items
- Click "Makeup" to see only makeup products
- Click "Skincare" to see only skincare products

### 5. **Filter by Price**
- Select a price range from the dropdown
- Results update automatically

### 6. **Sort Results**
- Choose a sorting option from the dropdown
- Products reorganize based on your selection

### 7. **Visit a Store**
- Find the product on your preferred store
- Hover over the price to see the "Visit Store" badge
- Click on any price item to open the store in a new tab
- Product name is automatically searched on that platform

## Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and responsive design
- **JavaScript** - Interactivity and dynamic functionality
- **Font Awesome 6** - Icons for stores and UI elements

## Features Breakdown

### Search Functionality
- Searches across product names, brands, and descriptions
- Case-insensitive matching
- Instant results

### Store Icons
- 🛍️ Nykaa - Shopping bag icon
- 🛒 Flipkart - Cart icon
- 📦 Amazon India - Amazon icon
- 🧺 BigBasket - Basket icon

### Price Display
- Shows both original and discounted prices
- Highlights the store with the best price
- Displays discount savings

## Sample Products

The website includes 10 sample products:

1. Radiant Glow Foundation - Lakmé
2. Hydra-Boost Serum - Mamaearth
3. Velvet Matte Lipstick - Maybelline
4. Retinol Night Cream - The Derma Co
5. Masterpiece Mascara - L'Oréal Paris
6. Vitamin C Brightening Moisturizer - Glow & Lovely
7. Perfecting Powder Foundation - Ponds
8. Nourishing Face Oil - Biotique
9. Smoky Eye Palette - Colorbar
10. Gentle Cleansing Balm - Minimalist

## Customization

### Changing the Logo
1. Replace `logo.png` with your own logo image
2. Keep the same filename or update the `src` in `index.html`
3. Recommended size: 150px width, 40px height

### Changing the Website Name
1. Edit the `<h1>` tag in `index.html`
2. Update the page title in the `<title>` tag
3. Update the footer text in the footer section

### Adding More Products
1. Open `script.js`
2. Add new product objects to the `productsData` array
3. Include: id, name, brand, category, description, and prices array
4. Remember to keep unique IDs

### Modifying Store Links
1. Open `script.js`
2. Edit the `getStoreUrl()` function
3. Update URL patterns or add new stores

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (Responsive design)

## Features Coming Soon

- Add to wishlist
- Price drop notifications
- User reviews and ratings
- Product recommendations
- Advanced filters

## Tips for Best Results

✅ Use specific product names for accurate searches
✅ Check multiple stores to find the best deals
✅ Use price filters to narrow down options
✅ Sort by "Price: Low to High" to find budget options
✅ Compare "Number of Sites" to see product availability

## License

This website is free to use and modify for personal or commercial purposes.

## Support

For any issues or suggestions, please check:
- File paths are correct
- Logo.png is in the project folder
- All files (HTML, CSS, JS) are in the same directory
- Browser console for any error messages

---

**Built with ❤️ for better shopping experience**
