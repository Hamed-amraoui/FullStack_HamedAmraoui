import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../api/productAPI';
import { Product } from '../types/Product';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, error, isLoading } = useQuery<Product>({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(Number(id)),
  });

  if (isLoading) return <p className="text-center text-blue-500">Loading product details...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching product details.</p>;
  if (!product) return <p className="text-center">Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-96 object-contain mb-4 bg-gray-100"
      />
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-xl font-semibold mb-2">Price: ${product.price.toFixed(2)}</p>
      <p className="text-gray-500 mb-2">Category: {product.category}</p>
      <p className="text-gray-500 mb-2">Stock: {product.stock}</p>
    </div>
  );
};

export default ProductDetail;
