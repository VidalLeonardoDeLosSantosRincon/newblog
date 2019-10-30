import React from 'react';

import '../assts/css/App.css';
//components
import Header from "./global/Header";
import Content from "./global/Content";
import Footer from "./global/Footer";

function App(props) {
  const {children} = props;
  return (
    <div className="App">
        <Header/>
          <Content body={children}/>
        <Footer/>
    </div>
  );
}

export default App;
