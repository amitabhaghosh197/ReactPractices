import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './components/Header';
import Maintable from './components/Tables';
import List from './components/list';
import Liststate from './components/listState';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component{
  render(){
   
    
    return(
      <div className="App">
        <Header/>
        <Maintable/>
        <List />
        <Liststate />
        
      </div>
    );
  }
}
export default App;
