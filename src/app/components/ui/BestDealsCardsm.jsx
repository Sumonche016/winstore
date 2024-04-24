import Image from "next/image";
import frame from "@/app/assets/Frame.png";
import Link from "next/link";

const BestDealsCardsm = ({ product }) => {
  return (
    <div className=" p-4">
      <Link key={product.id} href={`/product/${product.id}`}>
        <div className="flex justify-between items-center w-full">
          <div className="w-1/2">
            <p className="truncate my-2 text-xl text-[#034E53] capitalize">
              {product.title}
            </p>
            <p className="text-primary text-xl mb-2">Rs {product.price}.000</p>
          </div>
          <div>
            <h1 className="text-2xl ">
              <span className="text-primary">Special </span> <br /> Offer
            </h1>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <Image src={frame} alt="save image" />
          </div>
          <div className="flex justify-start items-start w-[158px] h-[129px] my-4">
            <Image
              src={product.image}
              width="100"
              height={100}
              style={{ width: "100%", height: "100%" }}
              className="mx-auto"
              alt="prodct image"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BestDealsCardsm;
