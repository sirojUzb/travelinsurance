import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Steps from "./components/Steps.jsx";
import CountriesMarquee from "./components/CountriesMarquee.jsx";
import Reviews from "./components/Reviews.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <main className="px-6 pt-6 pb-12 md:px-8">
        <p className="mb-5 text-lg text-neutral-400">Главная</p>
        <Hero />
      </main>
      <Features />
      <Steps />
      <CountriesMarquee />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
