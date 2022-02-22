import "./App.scss";
import "font-awesome/css/font-awesome.min.css";
import { Navbar } from "./pages/Navbar";
import { MainContent } from "./pages/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
