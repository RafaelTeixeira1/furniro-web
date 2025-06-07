import type { Product, ProductSummary } from '../types/Product';
import { createPage, type Page, type Pageable } from '../types/Page';

const BASE_URL = 'http://localhost:3001';

export async function getProducts(pageable: Pageable): Promise<Page<ProductSummary>> {
  const { page = 1, size = 10 } = pageable; // Usando 'size' conforme sua Pageable

  const response = await fetch(`${BASE_URL}/products?_page=${page}&_limit=${size}`);

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