import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../api/productAPI';
import { Product } from '../types/Product';

const ProductById = () => {
  const [searchId, setSearchId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  const { data: product, isLoading } = useQuery<Product | null>({
    queryKey: ['product', searchId],
    queryFn: () => fetchProductById(Number(searchId)),
    enabled: Boolean(searchId) && !isNaN(Number(searchId)),
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchId(value);
    
    if (isNaN(Number(value)) && value !== '') {
      setErrorMessage('Please enter a valid number');
    } else {
      setErrorMessage('');
    }
  };

  if (isLoading) return <p className="text-center text-blue-500">Loading product...</p>;

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          value={searchId}
          onChange={handleSearchChange}
          placeholder="Enter Product ID"
          className="border rounded px-4 py-2"
        />
      </div>

      {errorMessage && <p className="text-center text-red-500">{errorMessage}</p>}

      {product ? (
        <div className="p-4 border rounded shadow hover:shadow-lg transition-shadow">
          <div className="w-full h-56 overflow-hidden mb-3 rounded">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-contain bg-gray-100"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
        </div>
      ) : (
        searchId && !errorMessage && (
          <p className="text-center text-red-500">No product found with ID {searchId}</p>
        )
      )}
    </div>
  );
};

export default ProductById;
