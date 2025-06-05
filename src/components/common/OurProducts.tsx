import React, { useState, useEffect } from 'react';

// Definindo os tipos para a estrutura do produto
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

const OurProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async (): Promise<void> => {
            try {
                const response: Response = await fetch('/db.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data: DbData = await response.json();
                setProducts(data.products);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const formatPrice = (price: number): string => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price * 1000).replace('IDR', 'Rp');
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const filteredProducts = products.filter(product => product.id <= 8);

    return (
        <>

            <div className="flex flex-col items-center justify-center text-center font-poppins my-8 mx-8">
                <h2 className='font-bold text-3xl'>Our Products</h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8 max-w-6xl mx-auto">
                    {filteredProducts.map((product: Product) => (
                        <div key={product.id} className="group relative bg-gray-100 rounded-none overflow-hidden shadow-md h-full flex flex-col">
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full max-h-62 object-cover transition duration-300 group-hover:scale-105"
                            />
                            {product.discount > 0 && (
                                <div className="absolute top-3 right-3 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                                    -{product.discount}%
                                </div>
                            )}
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
                </div>
                <a className='border-yellow-600 border-2 bg-white text-yellow-600 font-semibold px-12 py-2 rounded-none 
                hover:bg-yellow-600 hover:text-white transition duration-300 cursor-pointer'  href='/shop'>
                    Show More
                </a>
            </div>
        </>
    );

};

export default OurProducts;