import AccordionSection from "./components/accordion";
import Banner from "./components/banner";
import CarouselCards from "./components/carousel";
import Footer from "./components/footer";
import Propaganda from "./components/propaganda";
import Separator from "./components/separator";
import FormComponent from "./components/form";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'

function App() {
  return (
    <div className="App">
      <Banner />
      <main className="main">
        <Propaganda />
        <CarouselCards />
        <Separator />
        <AccordionSection />
        <FormComponent />
        <Footer />
      </main>
    </div>
  );
}

export default App;
