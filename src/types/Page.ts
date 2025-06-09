export interface Page<T> {
  content: T[];            // lista de itens na página atual
  totalElements: number;   // total geral de elementos (X-Total-Count)
  currentPage: number;     // página atual (começando em 1)
  pageSize: number;        // quantidade de itens por página
  totalPages: number;      // total de páginas (calculado)
  isLastPage: boolean;     // true se for a última página
  isFirstPage: boolean;  
    // true se for a primeira página
}

export interface Pageable {
  page: number;     // página atual, começando em 1
  size: number;     // tamanho da página (quantidade de itens por página)
}
export function createPage<T>(
  content: T[],
  totalElements: number,
  currentPage: number,
  pageSize: number
): Page<T> {
  const totalPages = Math.ceil(totalElements / pageSize);
  return {
    content,
    totalElements,
    currentPage,
    pageSize,
    totalPages,
    isLastPage: currentPage >= totalPages,
    isFirstPage: currentPage === 1,
  };
}
