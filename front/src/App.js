import './App.css';
import React from 'react';
import Header from './components/layaut/Header';
import { Footer } from './components/layaut/Footer';
import { Home } from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <div className="container container-fluid">
        <Routes>
          <Route path="/Home" element={<Home />}/>
        </Routes>
      </div>
      <Home />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
