import type { ProductSummary } from "../../types/Product";

interface ProductGridProps {
  products: ProductSummary[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (!products.length) return <p>Nenhum produto encontrado.</p>;
    const formatPrice = (price: number): string => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price * 1000).replace('IDR', 'Rp');
    };

    // Função para verificar se o produto é novo (lançado há menos de 1 mês)
    const isNewProduct = (releaseDate: string): boolean => {
        const release = new Date(releaseDate);
        const today = new Date();
        const oneMonthAgo = new Date(today.setMonth(today.getMonth() - 1));
        
        return release > oneMonthAgo;
    };
  return (
        <ul
          className="grid gap-x-8 gap-y-10 justify-items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(285px, 1fr))",
          }}
        >
          {products.map((product) => (
                    <div key={product.id} className="group relative bg-gray-100 rounded-none overflow-hidden shadow-md h-full flex flex-col">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full max-h-62 object-cover transition duration-300 group-hover:scale-105"
                        />
                        
                        {/* Badge de desconto OU badge de novo produto */}
                        {product.discount > 0 ? (
                            <div className="absolute top-3 right-3 bg-red-500 bg-opacity-50 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
                                -{product.discount}%
                            </div>
                        ) : isNewProduct(product.releaseDate) ? (
                            <div className="absolute top-3 left-3 bg-green-500 bg-opacity-70 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
                                New
                            </div>
                        ) : null}

                        <div className="absolute inset-0 bg-black/60 bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center space-y-3">
                            <button className="bg-white text-yellow-600 font-semibold px-4 py-2 rounded-none">
                                Add to cart
                            </button>
                            <div className="flex space-x-4 text-white text-sm">
                                <span className="cursor-pointer">🔗 Share</span>
                                <span className="cursor-pointer">🔄 Compare</span>
                                <span className="cursor-pointer">🤍 Like</span>
                            </div>
                        </div>
                        <div className="p-4 text-left">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-500 text-sm">{product.shortDescription}</p>
                            <div className="flex items-center space-x-2 mt-2">
                                <span className="font-semibold text-black">
                                    {formatPrice(product.price * (1 - product.discount / 100))}
                                </span>
                                {product.discount > 0 && (
                                    <span className="line-through text-gray-400">
                                        {formatPrice(product.price)}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
        </ul>
  );
}
