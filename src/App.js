import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home/index';
import Coin from './pages/coin/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Navbar />
            <Routes>
              <Route index path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/coin/:id' element={<Coin />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
