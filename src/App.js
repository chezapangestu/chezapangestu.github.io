// import logo from './logo.svg';
import './App.css';
import 'flowbite';
import Navbar from './component/Navbar';
import Hardbar from './component/Hardbar';
import Head from './component/Head';
import Portoflio from './component/Portfolio';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hardbar />
      <Head />
      <Portoflio />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
