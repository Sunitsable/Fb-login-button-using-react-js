import logo from './logo.svg';
import './App.css';
import Facebook from './components/Facebook';
import React,{Component} from 'react';

class App extends Component {
 render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='App-title'>Facebook Authorization</h1>
      </header>
      <p className='App-Intro'>
        To get started,authenticate with Facebook
      </p>
      <Facebook />
    </div>
  );
 }
}

export default App;
