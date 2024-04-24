import { getCategory } from "@/lib/getCategory";
import CategorySlider from "./CategorySlider";

const Category = async () => {
  let response = await getCategory();

  return (
    <div className="py-4 container">
      <CategorySlider category={response} />
      <hr className="mt-8 bg-[#0000002B]" />
    </div>
  );
};

export default Category;
