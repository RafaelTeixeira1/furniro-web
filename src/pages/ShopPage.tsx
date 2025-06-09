import { useProducts } from '../hooks/useProducts';
import ShopBar from '../components/common/ShopBar'
import { ProductGrid } from '../components/common/ProductGrid'
import FilterShop from '../components/common/FilterShop';
import { Pagination } from '../components/common/Pagination';
import { useEffect, useMemo, useState } from 'react';
import StoreAdvantages from '../components/common/StoreAdvantages';
import { useLocation } from 'react-router-dom';


const ShopPage = () => {
  const location = useLocation();
  
  const path = location.pathname.split('/').pop();

  const initialTag = useMemo(() => {
    if (path === 'living' || path === 'dining' || path === 'bedroom') {
      return [path];
    }
    return [];
  }, [path]);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(16);
  const [sort, setSort] = useState<'default' | 'price-asc' | 'price-desc' | 'newest'>('default');
  const [tags, setTags] = useState<string[]>(initialTag);
  const [category, setCategory] = useState<string | undefined>(undefined);

  const filters = { sort, tags, category };
  const { productPage, loading, error } = useProducts({ page, size }, filters);

  // Atualiza as tags sempre que a URL mudar
  useEffect(() => {
    setTags(initialTag);
  }, [initialTag]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const breadcrumb = useMemo(() => {
    const crumbs = ['Home', 'Shop'];
    if (initialTag.length) {
      crumbs.push(initialTag[0].charAt(0).toUpperCase() + initialTag[0].slice(1));
    }
    return crumbs;
  }, [initialTag]);

  return (
    <div>
      <ShopBar breadcrumb={breadcrumb} />
      <FilterShop
        size={size}
        sort={sort}
        totalElements={productPage?.totalElements || 0}
        onSizeChange={(newSize) => {
          setPage(1); // resetar página ao mudar tamanho
          setSize(newSize);
        }}
        onSortChange={(newSort) => {
          setPage(1); // resetar página ao mudar ordenação
          setSort(newSort as any);
        }}
      />

      <div className="mt-11.5" />
      {loading && <p className="text-center mt-10">Loading products...</p>}
      {error && <p className="text-center mt-10 text-red-500">{error.message}</p>}
      {productPage && <ProductGrid products={productPage.content} />}

      <div className="mt-17.5" />
      <Pagination
        totalPages={productPage?.totalPages || 1}
        currentPage={page}
        onPageChange={setPage}
      />
      <div className="mt-21.25" />
      <StoreAdvantages />
    </div>
  );
};

export default ShopPage;