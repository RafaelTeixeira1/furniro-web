import { useEffect, useState } from 'react';
import { getProductsByTags } from '../services/ProductService'; 
import type { ProductSummary } from '../types/Product';

export function useProductsByTags(tags: string[], page = 1, limit = 10) {
  const [products, setProducts] = useState<ProductSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (tags.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    getProductsByTags(tags, page, limit)
      .then(setProducts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [tags, page, limit]);

  return { products, loading, error };
}
