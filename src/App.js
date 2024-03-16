import logo from './logo.svg';
import './App.css';
import Page1 from './components/Home'
import Page2 from './components/Page2'
import { DataProvider } from './components/DataContext';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>

    {/* <div className="App">
    <Page1/>
    </div> */}
    <DataProvider>
    <Routes>
    <Route path="/"  element={<Page1/>} />
    <Route path="/about" element={<Page2/>} />
    </Routes>
    </DataProvider>
   
    </Router>

  );
}

export default App;
