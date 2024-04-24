import { getProductByCategory } from "@/lib/getProductsByCategory";
import BestDealsCardsm from "./ui/BestDealsCardsm";
import CategoryTab from "./ui/CategoryTab";

const BestDealsNew = async ({ searchParams }) => {
  let products = await getProductByCategory(
    searchParams.category ? searchParams.category : "electronics"
  );

  return (
    <div className="container py-[5rem]">
      <div className="mb-4 flex md:flex-row flex-col w-full justify-between items-center">
        <h1 className="text-[1.5rem] mb-4">
          <span className="text-primary">Best </span>Deals
        </h1>
        <CategoryTab searchParams={searchParams} />
      </div>
      <div className="flex flex-wrap -mx-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4"
          >
            <div className="border border-borderPrimary">
              <BestDealsCardsm product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestDealsNew;
