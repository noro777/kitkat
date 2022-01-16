import './App.css';
import Service from './components/Service/Service';
import ServiceContainer from './components/Service/ServiceContainer';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import  { Heading, ContactMethods,QRCode} from './components/Connect/index'
import ContactFormContainer from './components/Connect/ContactForm/ContactFormContainer';
import Header from './../src/components/Header/Header'
import Lessons from './components/Lesson/Lesson';
import Facultets from './components/Facultets/Facultets';
import FacultetsContainer from './components/Facultets/FacultetsContainer';
import BlogsContainer from './components/Blogs/BlogsContainer';
import Facultets2 from './components/Facultets/Facultets';
import Sign from './components/Header/Sign/Sign';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/services" element={<ServiceContainer />} />
        <Route path="/contacts" element={<ContactFormContainer />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/facultets" element={<Facultets />} />
        <Route path="/news" element={<BlogsContainer />} />        
      </Routes>
    </Router>
  );
}

export default App;
