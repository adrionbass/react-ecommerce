import ProductDetails from "@/components/product/ProductDetails";
import ProductSlide from "@/components/product/ProductSlide";

const MainProduct = () => { return(
    <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ProductSlide />
        <ProductDetails />
      </main>
) }

export default MainProduct;