import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { Switch } from 'react-router-dom';

import About from './components/pages/About'
import Blog from './components/pages/Blog'
import News from './components/pages/News'
import Contactinfo from './components/pages/Contactinfo'
import Species from './components/pages/Species'
import SpeciesDetail from './components/pages/SpeciesDetails';


function App() {
  return (
    <div className="App">
        <header>Bio Diversity</header>
      <div  className="nav">
        <nav className="navbar-content" style={{padding:'10px'}}>
          <ul>
            {/*Nav bar portion started*/}
         <li className="list"><a href='/'>Home</a></li>  
         <li className="list"><a href='/about'>About</a></li> 
         <li className='list'><a href='/species'>Species</a></li>
         <li className='list'><a href='/news'>News</a></li>
         <li className='list'><a href='/contact'>Contactinfo</a></li>
         <li className='list'><a href='/blog'>Blogs</a></li>
         </ul>
         </nav>
      </div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/species" element={<Species />} />
          <Route path="/species/:id" element={<SpeciesDetail />} />
          <Route path="/contact" element={<Contactinfo />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
