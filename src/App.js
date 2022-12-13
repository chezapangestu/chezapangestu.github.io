// import logo from './logo.svg';
import './App.css';
import 'flowbite';
import Navbar from './component/Navbar';
import Head from './component/Head';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Head />
      <Portfolio />

      <Contact />
      <Footer />

    </div>
  );
}

export default App;
