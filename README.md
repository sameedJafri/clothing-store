# Clothing Store
A modern and responsive e-commerce frontend for a clothing store. This application is built using React, Vite, and styled with Tailwind CSS, providing a clean and intuitive user interface for browsing and shopping for apparel. The project emphasizes a component-based architecture and utilizes React Context for efficient state management.

## Features

*   **Dynamic Homepage:** Features a hero section, a showcase of the latest collection, and a list of best-selling items, along with company policies and a newsletter subscription form.
*   **Product Collection Page:**
    *   Displays a grid of all available products.
    *   Advanced filtering by category (Men, Women, Kids) and type (Topwear, Bottomwear, Winterwear).
    *   Sorting functionality by relevance, price (low-to-high, high-to-low).
    *   Integrated search bar to find products by name.
*   **Detailed Product View:**
    *   Provides comprehensive information for each product, including multiple images, description, price, and available sizes.
    *   Image gallery to view different product shots.
    *   "Related Products" section based on the current product's category.
*   **Shopping Cart Functionality:** Add products of a selected size to the cart. The cart item count is dynamically updated in the navigation bar.
*   **Responsive Design:** A mobile-first approach ensures a seamless experience across all devices, from desktops to smartphones, with a collapsible side menu for navigation on smaller screens.
*   **Component-Based Architecture:** Well-organized and reusable components for maintainability and scalability.

## Tech Stack

*   **Framework:** React
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS, PostCSS
*   **UI Components & Icons:** Material-UI (`@mui/material`), Mynaui Icons (`@mynaui/icons-react`)
*   **Routing:** React Router DOM
*   **State Management:** React Context API
*   **Linting:** ESLint

## Project Structure

The source code is organized within the `src` directory, following a standard React project structure:

```
src/
├── assets/       # Static assets like images and hardcoded product data
├── components/   # Reusable UI components (NavBar, ProductItem, Footer, etc.)
├── context/      # React context for global state management (ShopContext)
├── pages/        # Top-level page components for each route (Home, Collection, Product)
├── App.jsx       # Main application component with routing setup
└── main.jsx      # Entry point of the React application
```

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/sameedjafri/clothing-store.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd clothing-store
    ```

3.  **Install the dependencies:**
    ```sh
    npm install
    ```

4.  **Start the development server:**
    ```sh
    npm run dev
    ```

The application will be available at `http://localhost:5173` (or the next available port).

## Available Scripts

This project includes the following scripts defined in `package.json`:

*   `npm run dev`: Starts the development server using Vite with Hot Module Replacement (HMR).
*   `npm run build`: Bundles the application for production into the `dist` folder.
*   `npm run lint`: Lints the project files using ESLint to ensure code quality.
*   `npm run preview`: Serves the production build locally to preview the final application.
