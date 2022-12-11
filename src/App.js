// import logo from './logo.svg';
import './App.css';
import 'flowbite';
import Navbar from './component/Navbar';
import Head from './component/Head';
import Portoflio from './component/Portfolio';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Head />
      <Portoflio />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
