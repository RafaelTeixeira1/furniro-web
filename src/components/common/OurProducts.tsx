import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

// Tipos permanecem os mesmos
type ProductDescription = {
  text: string;
  images: string[];
};

type ProductAdditionalInfo = {
  text: string;
};

type Product = {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  stars: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  images: string[];
  sku: string;
  category: string;
  tags: string[];
  description: ProductDescription;
  additionalInfo: ProductAdditionalInfo;
  discount: number;
  releaseDate: string;
};

type DbData = {
  posts: Array<{
    id: number;
    title: string;
    content: string;
  }>;
  products: Product[];
};

const OurProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/db.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data: DbData = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    })
      .format(price * 1000)
      .replace("IDR", "Rp");
  };

  const isNewProduct = (releaseDate: string): boolean => {
    const release = new Date(releaseDate);
    const today = new Date();
    const oneMonthAgo = new Date(today.setMonth(today.getMonth() - 1));
    return release > oneMonthAgo;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredProducts = products.filter((product) => product.id <= 8);

  return (
    <div className="flex flex-col items-center justify-center text-center font-poppins my-8 mx-8">
      <h2 className="font-bold text-3xl">Our Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8 max-w-6xl mx-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group relative bg-gray-100 rounded-none overflow-hidden shadow-md h-full flex flex-col"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full max-h-62 object-cover transition duration-300 group-hover:scale-105"
            />

            {product.discount > 0 ? (
              <div className="absolute top-3 right-3 bg-red-500 bg-opacity-50 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
                -{product.discount}%
              </div>
            ) : isNewProduct(product.releaseDate) ? (
              <div className="absolute top-3 left-3 bg-green-500 bg-opacity-70 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
                New
              </div>
            ) : null}

            <div className="absolute inset-0 bg-black/60 bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center space-y-3 ">
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                      image: product.images[0],
                    })
                  )
                }
                className="bg-white text-yellow-600 font-semibold px-4 py-2 rounded-none hover:bg-yellow-100 transition cursor-pointer"
              >
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
              <p className="text-gray-500 text-sm">
                {product.shortDescription}
              </p>
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
      </div>

      <a
        className="border-yellow-600 border-2 bg-white text-yellow-600 font-semibold px-12 py-2 rounded-none hover:bg-yellow-600 hover:text-white transition duration-300 cursor-pointer"
        href="/shop"
      >
        Show More
      </a>
    </div>
  );
};

export default OurProducts;
