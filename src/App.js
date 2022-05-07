// import React, { Component } from 'react';
// import Person from './Person';
// import './App.css';

import React from 'react';
import './App.css';
import data from './data.json'
import Products from './components/Products';
import Filter from './Filter';

class App extends React.Component {
    
  constructor() {
    super();
    this.state = {
        products: data.products,
        size: "",
        sort: ""
    };
}
    
    sortProducts = (event) => {
      const sort= event.target.value;
        console.log(sort);
        this.setState((state) => ({
          sort: event.target.value,
          products: this.state.products.slice().sort((a,b)=>
            sort === "lowest"?(a.price>b.price)? 1: -1 :
            sort === "highest"?(a.price<b.price)?1:-1:
            a._id >b._id?1:1
          )
        }));
    };
    filterProducts = (event) =>{

      console.log(event.target.value)

      if(event.target.value === "ALL"){
        this.setState({
          size: event.target.value,
          products: data.products
        });
      }
      else{
        this.setState({
        size: event.target.value,
        products: data.products.filter((product) => product.availableSizes.indexOf(event.target.value)>=0)
      });
    }
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
                  <Filter count = {this.state.products.length + " Products "}
                      size={this.size}
                      sort= {this.sort}
                      sortProducts = {this.sortProducts}
                      filterProducts = {this.filterProducts}/>

                  <Products products = {this.state.products}/>
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