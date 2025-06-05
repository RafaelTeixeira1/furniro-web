import { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import type { Pageable } from '../../types/Page';

export function ProductList() {
  const [pageable, setPageable] = useState<Pageable>({ page: 1, size: 10 });
  const { productPage, loading, error } = useProducts(pageable);

  const handlePrevious = () => {
    if (pageable.page > 1) {
      setPageable({ ...pageable, page: pageable.page - 1 });
    }
  };

  const handleNext = () => {
    if (productPage && pageable.page < productPage.totalPages) {
      setPageable({ ...pageable, page: pageable.page + 1 });
    }
  };

  if (loading) return <p>Carregando produtos...</p>;
  if (error) return <p>Erro: {error.message}</p>;
  if (!productPage) return <p>Nenhum produto encontrado.</p>;

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {productPage.content.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.shortDescription}</p>
            <p>Preço: R$ {product.price.toFixed(2)}</p>
            {product.image && <img src={product.image} alt={product.name} width="100" />}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={handlePrevious} disabled={productPage.isFirstPage}>
          Anterior
        </button>

        <span style={{ margin: '0 1rem' }}>
          Página {productPage.currentPage} de {productPage.totalPages}
        </span>

        <button onClick={handleNext} disabled={productPage.isLastPage}>
          Próxima
        </button>
      </div>
    </div>
  );
}
