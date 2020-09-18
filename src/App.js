import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(()=>{
    
  }, [])
  return (
    <div className="main_wraper">
      <Header />
      <div>
        <div>
          <div className="main_content homepage">
            <div className="container-fluid">
              <Banner />
              <SectionOne categories={categories} />
              <SectionTwo />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
