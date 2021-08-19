import React from 'react';
import './App.css';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Navigation from './Components/Navigation/Navigation';




function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
        <ImageLinkForm />
      </div>
    </div>
  );
}

export default App;
