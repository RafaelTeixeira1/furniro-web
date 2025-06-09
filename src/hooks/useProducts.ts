import { useEffect, useState } from 'react';
import { getProducts } from '../services/productService'; 
import type { ProductFilter, ProductSummary } from '../types/Product';
import type { Page, Pageable } from '../types/Page';

export function useProducts(pageable: Pageable = { page: 1, size: 10 }, filters: ProductFilter = {}) {
  const [productPage, setProductPage] = useState<Page<ProductSummary> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    getProducts(pageable, filters)
      .then(setProductPage)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [pageable.page, pageable.size,  JSON.stringify(filters)]);

  return { productPage, loading, error };
}