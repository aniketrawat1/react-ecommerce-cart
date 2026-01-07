# Mini E-Commerce Store

This is a mini e-commerce web app built using **React**.  
I created this project to practice real-world frontend concepts like cart management, authentication, and payment flow.

The focus of this project is **functionality and clean logic**, not heavy UI libraries.

---

## What this project currently does

### Cart
- Add products to cart
- Increase and decrease product quantity
- Remove items or clear the cart
- Cart count updates automatically in the header
- Cart state is handled using React Context

### Login
- Firebase Authentication
- Email & password login
- Google login
- User must be logged in before checkout

### Payments (Test Mode)
- Razorpay Checkout integration (test mode only)
- Total amount comes directly from cart state
- Payment popup opens on “Proceed to Checkout”
- On successful payment, the cart is cleared
- No real money is involved

This payment setup is meant for **demo and learning purposes**.

## Tech used

- React (Vite)
- React Router
- Context API
- Firebase Authentication
- Razorpay Checkout (Test Mode)
- Plain CSS

---

## Payment testing

Razorpay is running in **test mode**.

Use these test card details:
Card number: 4111 1111 1111 1111
Expiry: Any future date
CVV: Any 3 digits
OTP: 123456

No actual payment is processed.

## Folder overview
src/
components/
context/
AuthContext.jsx
CartContext.jsx
Header.jsx
ProductCard.jsx

pages/
Home.jsx
Cart.jsx
Login.jsx

firebase/
firebase.js

data/
products.js

## Environment variables

Firebase keys are stored in a `.env` file and are **not committed** to GitHub.

Example
``env
VITE_FIREBASE_API_KEY=xxxx.

Current status:

Cart functionality complete
Authentication complete
Payment flow integrated (test mode)
UI intentionally kept simple
Future plans
Backend for payment verification
Order history page
Better checkout confirmation

Admin product management (optional)

Author

Aniket Rawat
GitHub: https://github.com/aniketrawat1

This project is built for learning and portfolio purposes.





