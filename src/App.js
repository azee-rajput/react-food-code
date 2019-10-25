import React from 'react';
import './App.css';

import NavbarHead from './components/navbar';
import Routing from './components/routing';
import Footer from './components/footer';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavbarHead/>
      <div className="mt-5"><Routing/></div>
      <Footer/>
    </div>
  );
}

export default App;
