import axios from 'axios';
import { Product } from '../types/Product';

const PRODUCTS_API = import.meta.env.VITE_PRODUCTS_API ;
console.log('PRODUCTS_API', PRODUCTS_API);

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  if (!PRODUCTS_API) {
    throw new Error('PRODUCTS_API is not defined in environment variables');
  }

  try {
    const response = await axios.get<Product[]>(PRODUCTS_API);
    console.log('response', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
};

// Fetch a single product by ID
export const fetchProductById = async (id: number): Promise<Product> => {
  if (!PRODUCTS_API) {
    throw new Error('PRODUCTS_API is not defined in environment variables');
  }

  try {
    const response = await axios.get<Product>(`${PRODUCTS_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw new Error(`Failed to fetch product with ID ${id}`);
  }
};
