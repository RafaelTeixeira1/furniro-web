import React from 'react'
import ShopBar from '../components/common/ShopBar' 
import { ProductGrid } from '../components/common/ProductGrid'
import RelatedProducts from '../components/common/RelatedProducts'
import type { Product } from '../types/Product';

// src/pages/ShopPage.tsx ou num arquivo separado de mocks
const mockProduct  = {
  id: 1,
  name: "Sofá de Canto Moderno",
  shortDescription: "Conforto e estilo",
  longDescription: "Este sofá de canto combina conforto e estilo, perfeito para qualquer sala de estar moderna.",
  price: 2500,
  stars: 4.5,
  reviews: 5,
  sizes: ["L", "XL", "XS"],
  colors: ["#FFFFFF", "#000000"],
  images: [
    "./src/assets/img/cortina-01.jpg",
    "./src/assets/img/cortina-02.jpg",
    "./src/assets/img/cortina-03.jpg",
    "./src/assets/img/cortina-04.jpg"
  ],
  sku: "SS001",
  category: "sofás",
  tags: ["sofá", "chairs", "home", "shop", 'living'],
  description: {
    text: "Sofá de canto em tecido macio, ideal para salas modernas.",
    images: [
      "./src/assets/img/cortina-05.jpg",
      "./src/assets/img/cortina-06.jpg"
    ]
  },
  additionalInfo: {
    text: "Garantia de 12 meses. Montagem inclusa."
  },
  discount: 30,
  releaseDate: "2025-05-20"
};


const ShopPage = () => {
  return (
    <div>
      <ShopBar breadcrumb={['Home', 'Shop']} />
      <RelatedProducts product={mockProduct} />
    </div>
  );
};

export default ShopPage