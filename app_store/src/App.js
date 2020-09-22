import React from 'react';
import './App.css';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import Form from './components/form';
import Main from './components/Main';


class App extends React.Component{
  render = () => {
    return(
      <div className="container">
        <Main />
      </div>
    )
  }
}

export default App;
