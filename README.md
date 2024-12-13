# Fullstack Developer Recruitment Homework

## Objective

Develop a fullstack application with a Node.js backend and a React frontend that fetches and displays products from an API. This project will evaluate your ability to work across both backend and frontend, implementing a functional and visually appealing application.

## Requirements

### Backend:

1. **Set up a Node.js TypeScript Project**
   - Use Node.js with Express.js as the web framework.
   - Ensure the project is written in TypeScript.

2. **API Implementation:**
   - Create a REST API endpoint that mirrors the functionality of the DummyJSON Products API:
     - Retrieve all products.
     - Retrieve a single product by ID.
   - Use static JSON data to simulate the DummyJSON API dataset.

### Frontend:

1. **Set up a Vite React TypeScript Project**
   - Use Vite to bootstrap the React project.

2. **API Integration:**
   - Connect the React frontend to your custom backend REST API.
   - Fetch and display a list of products on a dedicated page.

3. **Tech Stack:**
   - **React**: For building the user interface.
   - **TypeScript**: For type safety and maintainable code.
   - **TanStack React Query**: For managing API data fetching, caching, and state.
   - **TanStack Router**: For routing within the application.
   - **Tailwind CSS**: For UI components and styling.

4. **Product Page Features:**
   - Display product details such as:
     - Name
     - Price
     - Thumbnail image
   - Include basic search functionality for products.

## Setup Instructions

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Hamed-amraoui/FullStack_HamedAmraoui.git
   cd FullStack_HamedAmraoui/backend

2. **Install dependencies:**:
   ```bash
   npm install
3. **Start the backend:**:
   ```bash
   npm run dev
    ```
    - The backend will run on http://localhost:5000 by default.

4. **Endpoints:**:
    - GET /api/products: Fetches all products.
    - GET /api/products/:id: Fetches a single product by ID.

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend

2. **Install dependencies:**:
   ```bash
   npm install

3. **Start the frontend:**:
   ```bash
   npm run dev
    ```
    - The frontend will run on http://localhost:5173 by default.

## Screenshots

### Product List Page
![Product List](https://drive.google.com/file/d/1xpqixYhCwuf8xM_eZAMVl9wFduO2IVUi/view?usp=sharing)

### Product Detail Page
![Product Detail](https://drive.google.com/file/d/1Nv3IfSY7rvQi9qL0ftWgtxyxpTYrecnH/view?usp=sharing)

### Product by ID Page 
![Product by ID](https://drive.google.com/file/d/14f2-KQ-ro6g65mJKIOIdKsub17-9ynDg/view?usp=sharing)
