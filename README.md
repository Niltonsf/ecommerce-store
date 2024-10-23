# E-commerce Store

A modern, scalable e-commerce platform built with [React, Node.js]. This store provides users with a simple shopping experience, including a product catalog, shopping cart, payment gateway, and user account management.

## Table of Contents
1. [Features](#features)
2. [Technologies](#technologies)
3. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
4. [Configuration](#configuration)
5. [Running the Project](#running-the-project)
6. [Deployment](#deployment)
7. [Contributing](#contributing)
8. [License](#license)

---

## Features

- 🛒 **Product Management**: Browse, filter, and view detailed product descriptions.
- 🧾 **Shopping Cart**: Add or remove items in the cart.
- 💳 **Payment Integration**: Secure payment gateway integration.
- 📱 **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies

- **Frontend**: [React, Tailwind CSS, ShadcnUI]
- **Payment Gateway**: [Stripe]
- **State Management**: [Zustand]

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

- Node.js
- npm or yarn
- Supabase

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Niltonsf/ecommerce-store   
    ```

2. Install dependencies:

    ```bash    
    cd ecommerce-store
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file and add the following variables:
    ```bash
    NEXT_PUBLIC_API_URL=your-backend-url        
    ```

## Configuration

- **Database**: Ensure you have a running instance of [ecommerce-admin](https://github.com/Niltonsf/ecommerce-admin)
- **Payment Gateway**: Configure Stripe for development.
- **Environment Variables**: Refer to the `.env.example` file for more configurations.

## Running the Project

### Development Mode

1. Start the backend server:

    ```bash
    cd ecommerce-admin
    npm run dev
    ```

2. Start the frontend application:

    ```bash
    cd ecommerce-store
    npm start
    ```

Now, the app should be running at `http://localhost:3001` (for the frontend) and `http://localhost:3000` (for the backend).
  
## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

This is a educational project.
