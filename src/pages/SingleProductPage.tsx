import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Header from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import ProductDescription from "../components/product/ProductDescription";
import ProductAdditionalInfo from "../components/product/ProductAdditionalInfo";
import { useProductById } from "../hooks/useProductsById";

interface Dimensions { length: string; width: string; height: string; }
interface Description { text: string; images: string[]; }
interface AdditionalInfo {
  text?: string;
  materials?: string;
  dimensions?: Dimensions;
  weight?: string;
  assembly?: string;
}
interface Product {
  id: number;
  name: string;
  shortDescription: string;
  longDescription?: string;
  price: number;
  stars: number;         // campo novo
  reviews: number;
  sizes?: string[];
  colors?: string[];
  images: string[];
  sku: string;
  category: string;
  tags: string[];
  description: Description;
  additionalInfo?: AdditionalInfo;
  discount?: number;
  releaseDate?: string;
}

export default function SingleProductPage() {
  const { id } = useParams<{ id: string }>();

  const { product, loading, error } = useProductById(Number(id));


  const [activeImage, setActiveImage] = useState("");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "additional-info">(
    "description",
  );

  /* helpers */
  const toast = (msg: string) => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
    console.log(msg);
  };



  /* estados globais */
  if (loading) return <div className="py-20 text-center">Carregando…</div>;
  if (error) return <div className="py-20 text-center text-red-600">{error.message}</div>;
  if (!product) return <div className="py-20 text-center">Produto não encontrado.</div>;

  /* rating (estrelas cheias e vazias; arredonda .5 para cima) */
  const fullStars = Math.round(product.stars);
  const full = Array(fullStars).fill("★");
  const empty = Array(5 - fullStars).fill("☆");
    {console.log(product.images)}
  /* JSX */
  return (
    <>

      {/* Breadcrumb */}
      <div className="bg-primary h-24 flex items-center text-sm text-prata">
        <div className="container mx-auto flex items-center gap-2">
          <Link to="/" className="hover:text-secundary">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-secundary">Shop</Link>
          <span>/</span>
          <span className="text-black font-semibold">{product.name}</span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-3 md:px-0 font-poppins">
        <div className="flex flex-col lg:flex-row gap-8 py-12">

          {/* Galeria */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-auto max-h-96">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveImage(img)}
                  className={`w-24 h-24 object-cover rounded-lg cursor-pointer ${
                    img === activeImage ? "border-2 border-secundary" : "bg-primary"
                  }`}
                />
              ))}
            </div>
            <div className="flex-1 bg-primary rounded-lg flex items-center justify-center">
              <img src={activeImage} className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Infos */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl mb-2">{product.name}</h1>
            <p className="text-2xl text-prata font-medium mb-4">
              R$ {product.price.toLocaleString("pt-BR")}
            </p>

            <div className="flex items-center mb-4 text-yellow-500">
              {full.map((s, i) => <span key={`f${i}`}>{s}</span>)}
              {empty.map((s, i) => <span key={`e${i}`}>{s}</span>)}
              <span className="ml-4 text-sm text-prata border-l pl-4 border-cinza">
                {product.reviews} review(s)
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Tamanhos */}
            {product.sizes?.length && (
              <div className="mb-6">
                <h4 className="text-gray-500 mb-2">Size</h4>
                <div className="flex gap-3">
                  {product.sizes.map((s) => (
                
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`w-9 h-9 rounded ${
                        selectedSize === s ? "bg-secundary text-white" : "bg-primary"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Cores */}
            {product.colors?.length && (
              <div className="mb-6">
                <h4 className="text-gray-500 mb-2">Color</h4>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      style={{ backgroundColor: c }}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === c ? "border-secundary" : "border-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantidade & Add */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex border rounded">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4">-</button>
                <span className="px-4">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="px-4">+</button>
              </div>
              <button
                onClick={() => toast(`${product.name} (x${quantity}) adicionado!`)}
                className="border border-black rounded px-6 h-12 hover:bg-slate-600 hover:text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Abas */}
        <div className="border-t border-cinza pt-10">
          <div className="flex justify-center gap-16 mb-8 text-lg">
            <button
              onClick={() => setActiveTab("description")}
              className={activeTab === "description" ? "font-semibold" : "text-gray-400"}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("additional-info")}
              className={activeTab === "additional-info" ? "font-semibold" : "text-gray-400"}
            >
              Additional Information
            </button>
          </div>

          {activeTab === "description" && (
            <ProductDescription
              text={product.description.text}
              images={product.description.images}
            />
          )}
          {activeTab === "additional-info" && (
            <ProductAdditionalInfo product={product} />
          )}
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded">
          Item adicionado!
        </div>
      )}

    </>
  );
}
