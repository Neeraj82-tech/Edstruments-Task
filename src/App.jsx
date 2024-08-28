import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/one" element={<PageOne />} />
          <Route path="/two" element={<PageTwo />} />
          <Route path="/three" element={<PageThree />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
