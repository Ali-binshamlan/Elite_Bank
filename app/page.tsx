import Header from "./components/header/Header";
import Hero from "./components/Hero";
import BankingCategories from "./components/BankingCategories"
import UndrCategories from "./components/UndrCategories";
import TasheelPrograms from "./components/TasheelPrograms";
import EliteBankStats from "./components/EliteBankStats";
import AppFeaturesSection from "./components/AppFeaturesSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <BankingCategories />
      <UndrCategories />
      <TasheelPrograms />
      <AppFeaturesSection/>
      <EliteBankStats />
      <Footer/>
    </div>
  );
}
