# FOREVER — E-Commerce Backend

The backend API for **FOREVER**, a full-stack e-commerce platform built with Node.js, Express, and MongoDB.

It provides APIs for user authentication, product management, shopping carts, orders, image uploads, and online payments.

---

## 🚀 Features

- User registration and login
- JWT-based authentication
- Admin authentication
- Password hashing with bcrypt
- Product listing and single-product retrieval
- Admin product management
- Multiple product image uploads
- Cloudinary image integration
- Shopping cart management
- Order placement and management
- Stripe payment integration
- Razorpay payment integration
- Razorpay payment verification
- Admin order management
- MongoDB database with Mongoose
- CORS configuration for frontend applications

---

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- JavaScript (ES Modules)

### Database

- MongoDB
- Mongoose

### Authentication & Security

- JSON Web Token (JWT)
- bcrypt
- dotenv
- validator

### Image & File Handling

- Cloudinary
- Multer

### Payments

- Stripe
- Razorpay

### Development

- Nodemon

---

## 📁 Project Structure

```text
backend/
│
├── config/
│   ├── cloudinary.js
│   └── mongodb.js
│
├── controllers/
│
├── middleware/
│   ├── adminAuth.js
│   ├── auth.js
│   └── multer.js
│
├── models/
│
├── routes/
│   ├── cartRoute.js
│   ├── orderRoute.js
│   ├── productRoute.js
│   └── userRoute.js
│
├── uploads/
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js

---

```
## 🔌 API Routes

The backend provides API routes for users, products, carts, and orders.

### User Routes

| Method | Endpoint | Authentication | Description |
|---|---|---|---|
| POST | `/api/user/register` | Public | Register a new user |
| POST | `/api/user/login` | Public | Login user |
| POST | `/api/user/admin` | Public | Admin login |

### Product Routes

| Method | Endpoint | Authentication | Description |
|---|---|---|---|
| GET | `/api/product/list` | Public | Get all products |
| POST | `/api/product/single` | Public | Get a single product |
| POST | `/api/product/add` | Admin | Add a product |
| POST | `/api/product/remove` | Admin | Remove a product |

Product creation supports up to four images:

- `image1`
- `image2`
- `image3`
- `image4`

### Cart Routes

| Method | Endpoint | Authentication | Description |
|---|---|---|---|
| POST | `/api/cart/get` | User | Get user's cart |
| POST | `/api/cart/add` | User | Add an item to the cart |
| POST | `/api/cart/update` | User | Update the cart |

### Order Routes

| Method | Endpoint | Authentication | Description |
|---|---|---|---|
| POST | `/api/order/place` | User | Place an order |
| POST | `/api/order/stripe` | User | Create Stripe payment |
| POST | `/api/order/razorpay` | User | Create Razorpay payment |
| POST | `/api/order/razorpay/verify` | User | Verify Razorpay payment |
| POST | `/api/order/userorders` | User | Get user's orders |
| POST | `/api/order/list` | Admin | Get all orders |
| POST | `/api/order/status` | Admin | Update order status |

---


## 🔐 Authentication

FOREVER uses **JSON Web Tokens (JWT)** for authentication.


### User Authentication

After a successful user login, the API returns a JWT token.

Authenticated requests send the token using the `token` request header:

### Admin Authentication
token: YOUR_JWT_TOKEN
```

```
## 🗄️ Database

FOREVER uses **MongoDB** with **Mongoose**.

The MongoDB connection is configured using:


MONGODB_URI=your_mongodb_connection_string


---

## ☁️ Cloudinary

Product images are handled using **Cloudinary**.

Configure Cloudinary using:

```env
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

```
## 💳 Payment Integration

FOREVER supports two payment providers:

### Stripe

```env
STRIPE_SECRET_KEY=your_stripe_secret_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_CURRENCY=inr

PAYMENT_CURRENCY=inr

DELIVERY_CHARGES=10

```
## ⚙️ Environment Variables

Create a `.env` file inside the `backend` directory:

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

PAYMENT_CURRENCY=inr
DELIVERY_CHARGES=10

STRIPE_SECRET_KEY=your_stripe_secret_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_CURRENCY=inr


```
## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Rubayat0007/forever-ecommerce-backend.git

Navigate to the project:

cd forever-ecommerce-backend

Install dependencies:

npm install

Create a .env file and add the required environment variables.


---

```
## ▶️ Running the Server

### Development

```bash
npm run server

This starts the server using Nodemon.

Production
npm start

This starts the server using Node.js.

By default, the backend runs on:

http://localhost:4000

You can test the server by opening:

http://localhost:4000/

A successful response should be:

API Working

```
## 🌐 Frontend

The FOREVER backend is designed to work with the FOREVER frontend application.

Frontend repository:

https://github.com/Rubayat0007/forever-ecommerce-frontend

The backend currently allows requests from:

```
http://localhost:5173
http://localhost:5174

```markdown
## 🔒 Security

The backend uses:

- JWT authentication
- bcrypt password hashing
- Environment variables for sensitive credentials
- User authentication middleware
- Admin authentication middleware
- CORS configuration

Never expose sensitive credentials such as:

- MongoDB credentials
- JWT secrets
- Cloudinary credentials
- Stripe secret keys
- Razorpay secret keys
- Admin passwords

---

```
## 🔮 Future Improvements

- Improved API validation
- More detailed API documentation
- Automated testing
- Production deployment
- API documentation with Swagger/OpenAPI
- Improved error handling
- Additional security improvements

---

```
## 👨‍💻 Author

**Rubayat Karim**

GitHub:

https://github.com/Rubayat0007

---

## 📄 License

This project uses the **ISC License** as specified in `package.json`.