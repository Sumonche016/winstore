import Image from "next/image";
import logo from "@/app/assets/logo.png";

import frame from "../assets/logoFrame.png";
import Social from "./ui/Social";
const Footer = () => {
  return (
    <footer className="bg-blackish">
      <div className="container py-[3rem]">
        <div className=" md:flex justify-between space-y-4 md:space-y-0">
          <div>
            <Image src={logo} alt="logo" />
            <h1 className="text-primary mt-2">Got questions? Call us 24/7!</h1>
            <span className="text-white my-4 inline-block">
              03 111 666 144 <br /> 0317 1777015.
            </span>
            <h1 className="text-primary mt-2">Contact info </h1>
            <span className="text-white">info@winstore.pk</span>
            <Social />
          </div>
          <div>
            <h1 className="text-primary text-[1.2rem]">Trading</h1>
            <div className="text-white  mt-2 ">
              <ul>
                <li>Installments</li>
                <li>Electronics</li>
                <li>Grocery</li>
                <li>Health &amp; Beauty</li>
                <li>Home Appliances</li>
                <li>Mobile Accessories</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-primary text-[1.2rem]">Information</h1>
            <div className="text-white mt-2 ">
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Shipping &amp; Return</li>
                <li>Privacy policy</li>
                <li>Terms &amp; Conditions</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-primary text-[1.2rem]">Customer care</h1>
            <div className="text-white mt-2 ">
              <ul>
                <li>My Account</li>
                <li>Track Your Order</li>
                <li>Recently Viewed</li>
                <li>Wishlist</li>
                <li>Compare</li>
                <li>Become a Vendor</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" mt-4 md:mt-0 md:flex justify-end">
          <Image src={frame} alt="visa logo image" />
        </div>
      </div>
      <div className="bg-[#161616] p-4">
        <div className="container text-white">
          <p>© 2021 Winstore. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
