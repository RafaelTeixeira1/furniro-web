import type { Product, ProductSummary } from '../types/Product';

const BASE_URL = 'http://localhost:3001';

export async function getProducts(page = 1, limit = 10): Promise<ProductSummary[]> {
  const response = await fetch(`${BASE_URL}/products?_page=${page}&_limit=${limit}`);
  if (!response.ok) throw new Error('Erro ao buscar produtos');
  
  const data: Product[] = await response.json();
  
  return data.map(({ id,name,shortDescription, price,images, discount, releaseDate,}) => ({
   id,
    name,
    shortDescription,
    price,
    image:images[0],
    discount,
    releaseDate
  }));
}

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (!response.ok) throw new Error('Produto não encontrado');
  return response.json();
}

export async function getProductsByTags(tags: string[],page = 1, limit = 10): Promise<ProductSummary[]> {
  const query = tags.map(tag => `tags_like=${tag}`).join('&');
  const response = await fetch(`${BASE_URL}/products?${query}`);
  if (!response.ok) throw new Error('Erro ao buscar produtos por tags');
  
  const data: Product[] = await response.json();
  
  return data.map(({ id,name,shortDescription, price,images, discount, releaseDate,}) => ({
   id,
    name,
    shortDescription,
    price,
    image:images[0],
    discount,
    releaseDate
  }));
}

export async function getRelatedProducts(product: Product): Promise<ProductSummary[]> {
  const query = product.tags.map(tag => `tags_like=${tag}`).join('&');
  const response = await fetch(`${BASE_URL}/products?${query}`);
  if (!response.ok) throw new Error('Erro ao buscar produtos relacionados');
  
  const related: Product[] = await response.json();
  
  return related.map(({ id,name,shortDescription, price,images, discount, releaseDate,}) => ({
   id,
    name,
    shortDescription,
    price,
    image:images[0],
    discount,
    releaseDate
  }));
}
