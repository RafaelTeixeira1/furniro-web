import type { ProductSummary } from "../../types/Product";

interface ProductGridProps {
  products: ProductSummary[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (!products.length) return <p>Nenhum produto encontrado.</p>;
  return (
        <ul
          className="grid gap-x-8 gap-y-10 justify-items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(285px, 1fr))",
          }}
        >
          {products.map((product) => (
            <li
              key={product.id}
              className="border p-4 rounded shadow w-full max-w-[285px]"
            >
              <h3 className="font-bold text-lg mb-2">{product.name}</h3>
              <p className="mb-1">{product.shortDescription}</p>
              <p className="mb-2">Preço: R$ {product.price.toFixed(2)}</p>
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                />
              )}
            </li>
          ))}
        </ul>
  );
}
