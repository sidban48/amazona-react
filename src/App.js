import React from 'react';
import './App.css';
import data from './data.json'
import Products from './components/Products';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }; 
  }

  render(){
  return (
    <div className="grid-container">
      <header>
      <a href = "/">Home</a>
      </header>
      <main>
        <div className='content'>
          <div className='main'>
              <Products products = {this.state.products}></Products>
          </div>
          <div className='sidebar'>
              cart  items
          </div>
        </div>
      </main>
      <footer>
        Made by Siddharth Bansal(only for educational purposes)
      </footer>

    </div>
  );}
}

export default App;
