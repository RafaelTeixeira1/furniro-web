import { useEffect, useState } from 'react';
import { getProductById } from '../services/ProductService'; 
import type { Product } from '../types/Product';

export function useProductById(id: number) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;
    
    setLoading(true);
    getProductById(id)
      .then(setProduct)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading, error };
}
