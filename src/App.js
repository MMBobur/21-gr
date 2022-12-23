import './App.css';
import Navbar from './asilbek/Navbar/Navbar';
import Home from './asilbek/Home/Home';
import Animals from './asilbek/Animals/Animals';
import Footer from "./footer";
import Instagram from "./instagram";
import Simple from "./Simple";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Animals />
      <Simple/>
      <Instagram/>
      <Footer/>
    </div>
  );
}

export default App;
