import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/products.actions";
const Home = async () => {
  const latestProducts = await getLatestProducts();
  const transformedProducts = latestProducts.map((product) => ({
    ...product,
    price: product.price.toString(), // pretvori Decimal u string
    rating: product.rating.toString(), // isto može da bude potrebno ako rating je Decimal
  }));
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Test Content
      <ProductList
        data={transformedProducts}
        title="Newest Arrivals"
        limit={4}
      ></ProductList>
    </div>
  );
};
export default Home;
