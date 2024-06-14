import './App.css';
import Navigation from './pages/nav/Navigation';
import Main from './pages/Page1/Main';
import Aboutus from './pages/About/Aboutus';
import Forms from './pages/Form/Form';
import Graphic from './pages/Graphic/Graphic';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Main/>
      <Aboutus />
      <Forms />
      <Graphic/>
      <Footer/>
    </>
  );
}

export default App;
