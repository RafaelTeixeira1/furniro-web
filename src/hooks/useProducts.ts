import { useEffect, useState } from 'react';
import { getProducts } from '../services/ProductService'; 
import type { ProductSummary } from '../types/Product';

export function useProducts(page = 1, limit = 10) {
  const [products, setProducts] = useState<ProductSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    getProducts(page, limit)
      .then(setProducts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [page, limit]);

  return { products, loading, error };
}