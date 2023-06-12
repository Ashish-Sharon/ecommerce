import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Celebrity from "./components/Celebrity";
import Newarrival from "./components/Newarrival";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel> </Carousel>
      <Celebrity />
      <Newarrival />
      <Footer/>
    </div>
  );
}

export default App;
