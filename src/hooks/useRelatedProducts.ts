import { useEffect, useState } from 'react';
import { getRelatedProducts } from '../services/productService'; 
import type { Product, ProductSummary } from '../types/Product';
import type { Page, Pageable } from '../types/Page';

export function useRelatedProducts(
  product: Product | null,
  pageable: Pageable = { page: 1, size: 10 }) {
  const [productPage, setProductPage] = useState<Page<ProductSummary> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!product) return;

    setLoading(true);
    getRelatedProducts(product, pageable)
      .then(setProductPage)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [product]);

  return { productPage, loading, error };
}
