import logo from './logo.svg';
import './App.css';
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import Card from './components/Card.jsx';
import CardHeading from './components/CardHeading.jsx';

function App() {
  return (
  
   <div>
    <Navbar/>
    <CardHeading/>
    <Card/>
    <Footer/>
   </div>
  
  );
}

export default App;
