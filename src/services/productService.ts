import type { Product, ProductFilter, ProductSummary } from '../types/Product';
import { createPage, type Page, type Pageable } from '../types/Page';

const BASE_URL = 'http://localhost:3001';

export async function getProducts(
  pageable: Pageable,
  filters: ProductFilter = {}
): Promise<Page<ProductSummary>> {
  const { page = 1, size = 10 } = pageable;
  const { category, tags, sort } = filters;

  const params = new URLSearchParams();
  params.set('_page', page.toString());
  params.set('_limit', size.toString());

  // Filtros opcionais
  if (category) {
    params.set('category', category);
  }

  if (tags && tags.length > 0) {
    tags.forEach(tag => params.append('tags_like', tag)); // _like permite busca parcial
  }

  // Ordenação
  if (sort === 'price-asc') {
    params.set('_sort', 'price');
    params.set('_order', 'asc');
  } else if (sort === 'price-desc') {
    params.set('_sort', 'price');
    params.set('_order', 'desc');
  } else if (sort === 'newest') {
    params.set('_sort', 'releaseDate');
    params.set('_order', 'desc');
  }

  const response = await fetch(`${BASE_URL}/products?${params.toString()}`);

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos');
  }

  const totalCountHeader = response.headers.get('X-Total-Count');
  const totalElements = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;

  const data: Product[] = await response.json();

  const content: ProductSummary[] = data.map(({ id, name, shortDescription, price, images, discount, releaseDate }) => ({
    id,
    name,
    shortDescription,
    price,
    image: images[0],
    discount,
    releaseDate
  }));

  return createPage(content, totalElements, page, size);
}

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) throw new Error('Produto não encontrado');
  return response.json();
}

export async function getProductsByTags(tags: string[], page = 1, limit = 10): Promise<ProductSummary[]> {
  const query = tags.map(tag => `tags_like=${tag}`).join('&');
  const response = await fetch(`${BASE_URL}/products?${query}`);
  if (!response.ok) throw new Error('Erro ao buscar produtos por tags');

  const data: Product[] = await response.json();

  return data.map(({ id, name, shortDescription, price, images, discount, releaseDate, }) => ({
    id,
    name,
    shortDescription,
    price,
    image: images[0],
    discount,
    releaseDate
  }));
}

export async function getRelatedProducts(product: Product, pageable: Pageable): Promise<Page<ProductSummary>> {
  const { page = 1, size = 10 } = pageable; // Usando 'size' conforme sua Pageable


  const query = product.tags.map(tag => `tags_like=${tag}`).join('&');
  const response = await fetch(`${BASE_URL}/products?${query}&_page=${page}&_limit=${size}`);
  if (!response.ok) throw new Error('Erro ao buscar produtos relacionados');

  const totalCountHeader = response.headers.get('X-Total-Count');
  const totalElements = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;

  const data: Product[] = await response.json();

  const content: ProductSummary[] = data.map(({ id, name, shortDescription, price, images, discount, releaseDate }) => ({
    id,
    name,
    shortDescription,
    price,
    image: images[0],
    discount,
    releaseDate
  }));

  return createPage(content, totalElements, page, size);
}