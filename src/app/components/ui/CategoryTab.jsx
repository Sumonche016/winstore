import { getCategory } from "@/lib/getCategory";
import Link from "next/link";
import ChangeCategoryByClick from "../ChangeCategoryByClick";
const CategoryTab = async ({ searchParams }) => {
  let categories = await getCategory();
  const activeCategory = searchParams.category || "electronics";

  return (
    <div className="flex md:gap-8 gap-4 items-center">
      <div className="flex gap-4 items-center">
        {categories.map((category) => (
          <Link
            key={category}
            href={{ pathname: "/", query: { category } }}
            scroll={false}
          >
            <button
              className={`uppercase  ${
                category === activeCategory
                  ? "border-b-4 pb-2 border-[#0AAEB9] text-primary"
                  : "text-black pb-2"
              }`}
            >
              {category}
            </button>
          </Link>
        ))}
      </div>
      <ChangeCategoryByClick />
    </div>
  );
};

export default CategoryTab;
