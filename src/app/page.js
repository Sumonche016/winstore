import Header from "./components/Navbar";
import Category from "./components/Category";
import NewArriables from "./components/NewArriables";
import BestDealsNew from "./components/BestDeals";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
export default function Home({ searchParams }) {
  return (
    <div className="div">
      <Header />
      <Hero />
      <Category />

      <NewArriables />
      <BestDealsNew searchParams={searchParams} />
      <Footer />
    </div>
  );
}
