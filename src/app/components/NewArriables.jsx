import { getProducts } from "@/lib/getProducts";
import ProductCard from "./ProductCard";

const NewArriables = async () => {
  let response = await getProducts();
  return (
    <div className=" container py-[5rem]">
      <h1 className="text-[1.5rem] text-center md:text-start mb-4">
        <span className="text-primary   ">New </span> Arriables
      </h1>
      <ProductCard products={response} />
    </div>
  );
};

export default NewArriables;
