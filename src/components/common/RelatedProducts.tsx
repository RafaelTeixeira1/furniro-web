import { useNavigate } from "react-router-dom";
import { useRelatedProducts } from "../../hooks/useRelatedProducts";
import type { Product } from "../../types/Product";
import { getNavigableTag } from "../../utils/porduct";
import { ProductGrid } from "./ProductGrid";

type RelatedProductsProps = {
  product: Product | null;
};

export default function RelatedProducts({ product }: RelatedProductsProps) {
  const { productPage, loading, error } = useRelatedProducts(product, { page: 1, size: 4 });
  const tag = getNavigableTag(product?.tags || []);
  const navigate = useNavigate();
    const handleClick = () => {
    if (tag) {
      navigate(`/shop/${tag}`);
    } else {
      navigate("/shop");
    }
  };


  return (
  <section className="w-full my-10 pt-08 pb-14 sm:pt-09 sm:pb-14 lg:pt-13.75 lg:pb-23">

      <h2 className="text-custom-title text-center">Related Products</h2>

      {loading && <p>Loading related products...</p>}
      {error && <p className="text-red-600">Error: {error.message}</p>}
      {!loading && productPage !=null && !error && productPage.content.length > 0 && (
        <>
          <div className="mt-6.5 mb-11 w-[86%] mx-auto">
            <ProductGrid products={productPage.content} />
          </div>
        </>
      )}

      {!loading  && productPage !=null && !error && productPage.content.length === 0 && (
        <p>No related products found.</p>
      )}
      <div className="flex justify-center">
        <button onClick={handleClick} className="custom-button-out">Show More</button>
      </div>
    </section>
  );
}
