import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/productAPI';
import { Product } from '../types/Product';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [searchId, setSearchId] = useState<string>('');
  const { data: products, error, isLoading } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchId(e.target.value);
  };

  // Filter products using search ID
  const filteredProducts = products?.filter((product) =>
    product.id.toString().includes(searchId)
  );

  if (isLoading) return <p className="text-center text-blue-500">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching products</p>;

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          value={searchId}
          onChange={handleSearchChange}
          placeholder="Search by ID"
          className="border rounded px-4 py-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts?.length === 0 ? (
          <p className="text-center col-span-full">No products found</p>
        ) : (
          filteredProducts?.map((product) => (
            <div key={product.id} className="p-4 border rounded shadow hover:shadow-lg transition-shadow">
              <div className="w-full h-56 overflow-hidden mb-3 rounded">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain bg-gray-100"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
              <Link
                to={`/products/${product.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
