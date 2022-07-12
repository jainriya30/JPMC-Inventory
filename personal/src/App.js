import './App.scss';
import { Navbar, Footer2 } from '../src/components';
import { Landing, Dashboard, Onboard, Onboard2 } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Onboard/>} />
        <Route path='/signup' element={<Onboard2/>} />
      </Routes>
      <Footer2 />
    </Router>
    </div>
  );
}

export default App;
