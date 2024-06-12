import "./App.css";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header/header";
import Opportunities from "./components/Opportunities";

function App() {
  return (
    <>
      <Header />
      <Gallery />
      <main>
        <Opportunities />
      </main>
      <Footer />
    </>
  );
}

export default App;
