# 🛒 React Shopping Cart Application

A modern **Shopping Cart Web Application** built using **React, Redux Toolkit, Tailwind CSS, and Fake Store API**.
The application allows users to browse products, add them to a cart, remove items, and view the total cart value in real-time.

This project demonstrates **state management using Redux**, **API integration**, and **responsive UI design**.

---

# 🚀 Features

### 🛍️ Product Listing

* Fetches products from **Fake Store API**
* Displays product title, description, image, and price
* Responsive product grid layout

### 🛒 Cart Management

* Add products to cart
* Remove products from cart
* View cart item count in Navbar
* Dynamic cart updates using Redux

### 💰 Cart Summary

* Displays total number of items
* Calculates total cart price
* Checkout button UI

### 🔔 Notifications

* Toast notifications when:

  * Item added to cart
  * Item removed from cart

### ⏳ Loading State

* Spinner displayed while fetching products

---

# 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* React Router DOM
* Tailwind CSS
* React Icons
* React Hot Toast

### API

* Fake Store API

---

# 📁 Project Structure

```
shopping-cart/
│
├── public/                 # Static assets
│
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── CartItem.js
│   │   ├── Navbar.js
│   │   ├── Product.js
│   │   └── Spinner.js
│   │
│   ├── pages/              # Page components
│   │   ├── Home.js
│   │   └── Cart.js
│   │
│   ├── redux/              # Redux store configuration
│   │   ├── Store.js
│   │   └── Slices/
│   │       └── cartSlice.js
│   │
│   ├── data/               # Static product data
│   │   └── products.js
│   │
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point
│   ├── index.css           # Global styles
│
└── README.md
```

---

# ⚙️ Installation

### 1️⃣ Clone the Repository

```
git clone <your-repository-url>
cd shopping-cart
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Start Development Server

```
npm start
```

The app will run on:

```
http://localhost:3000
```

---

# 📡 API Used

### Fake Store API

```
https://fakestoreapi.com/products
```

Provides product information including:

* Title
* Description
* Price
* Category
* Image
* Rating

---

# 🔄 Application Flow

1️⃣ Products are fetched from Fake Store API.

2️⃣ Products are displayed on the **Home page**.

3️⃣ Users can:

* Add products to cart
* Remove products from cart

4️⃣ Redux manages the cart state globally.

5️⃣ Cart page shows:

* Cart items
* Total price
* Checkout button

---

# 📦 Redux Store

### Cart Slice

Actions available:

```
add(product)
remove(productId)
```

### Example Reducer

```
add: (state, action) => {
   state.push(action.payload);
}

remove: (state, action) => {
   return state.filter((item) => item.id !== action.payload);
}
```

---

# 🎨 UI Features

* Tailwind CSS styling
* Responsive layout
* Animated cart count
* Product cards
* Loading spinner
* Clean minimal design

---

# 📷 Screenshots (Optional)

You can add screenshots like:

```
/screenshots/home.png
/screenshots/cart.png
```

---

# 🚀 Future Improvements

* Product search functionality
* Product category filtering
* User authentication
* Checkout payment integration
* Backend database for orders

---

# 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make changes
4. Commit changes
5. Push to branch
6. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 🙌 Acknowledgements

* React Team
* Redux Toolkit
* Tailwind CSS
* Fake Store API
