import { useEffect, useState } from 'react';
import { getRelatedProducts } from '../services/productService'; 
import type { Product, ProductSummary } from '../types/Product';

export function useRelatedProducts(product: Product | null) {
  const [relatedProducts, setRelatedProducts] = useState<ProductSummary[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!product) return;

    setLoading(true);
    getRelatedProducts(product)
      .then(setRelatedProducts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [product]);

  return { relatedProducts, loading, error };
}
