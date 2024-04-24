import { getProducts } from "@/lib/getProducts";
import { getSingleProduct } from "@/lib/getSingleProduct";

export async function generateMetadata({ params }) {
  const { id } = params;
  let product = await getSingleProduct(id);
  return {
    title: product.title,
    description: product.description,
  };
}
const page = async ({ params }) => {
  const { id } = params;
  let product = await getSingleProduct(id);
  return (
    <div>this is single product page product number : {product?.title}</div>
  );
};

export default page;

export async function generateStaticParams() {
  const products = await getProducts();

  return products?.map((product) => ({
    id: product.id.toString(),
  }));
}
