import './App.css';
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Secondpage from "./pages/secondpage";


function App() {
return (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/secondpage" element={<Secondpage />} />
    </Routes>
  </Router>
);
}

export default App;
