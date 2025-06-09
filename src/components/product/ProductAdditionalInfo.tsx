import React from "react";

interface Dimensions {
  length: string;
  width: string;
  height: string;
}
interface AdditionalInfo {
  text?: string;
  materials?: string;
  dimensions?: Dimensions;
  weight?: string;
  assembly?: string;
}
interface Product {
  sku: string;
  category: string;
  tags: string[];
  additionalInfo?: AdditionalInfo;
}

export default function ProductAdditionalInfo({ product }: { product: Product }) {
  const info = product.additionalInfo ?? {};

  return (
    <div className="text-gray-700 leading-relaxed mb-10 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 text-sm">
        <tbody>
          {/* SKU, Categoria, Tags sempre vêm da raiz */}
          <tr>
            <td className="px-4 py-2 font-medium border-b">SKU</td>
            <td className="px-4 py-2 border-b">{product.sku}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-medium border-b">Categoria</td>
            <td className="px-4 py-2 border-b">{product.category}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-medium border-b">Tags</td>
            <td className="px-4 py-2 border-b">{product.tags.join(", ")}</td>
          </tr>

          {/* Campos opcionais vindos de additionalInfo */}
          {info.materials && (
            <tr>
              <td className="px-4 py-2 font-medium border-b">Materiais</td>
              <td className="px-4 py-2 border-b">{info.materials}</td>
            </tr>
          )}
          {info.dimensions && (
            <tr>
              <td className="px-4 py-2 font-medium border-b">Dimensões (CxLxA)</td>
              <td className="px-4 py-2 border-b">
                {`${info.dimensions.length} x ${info.dimensions.width} x ${info.dimensions.height}`}
              </td>
            </tr>
          )}
          {info.weight && (
            <tr>
              <td className="px-4 py-2 font-medium border-b">Peso</td>
              <td className="px-4 py-2 border-b">{info.weight}</td>
            </tr>
          )}
          {info.assembly && (
            <tr>
              <td className="px-4 py-2 font-medium border-b">Montagem</td>
              <td className="px-4 py-2 border-b">{info.assembly}</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Texto livre (garantia, etc.) */}
      {info.text && (
        <p className="mt-6 text-gray-600">{info.text}</p>
      )}
    </div>
  );
}
