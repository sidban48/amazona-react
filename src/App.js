// import React, { Component } from 'react';
// import Person from './Person';
// import './App.css';

import React from 'react';
import './App.css';
import data from './data.json'
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart'

class App extends React.Component {
    
  constructor() {
    super();
    this.state = {
        products: data.products,
        size: "",
        sort: "",
        cartItems: []
    };
}

IncrementItem = (count)=>{
  console.log(count)
}





removeItems = (item) =>{
  console.log("inside removeItems")
}
addToCart = (product) => {
  const cartItems  = this.state.cartItems.slice();
  let alreadyInCart  = false;
  cartItems.forEach((Item) => { 
    //if items are already present in cart
    if(Item._id === product._id){
      Item.count++;
      alreadyInCart=true;
    }
    
  });

  if(!alreadyInCart){
    cartItems.push({...product,count:1})
  }

  this.setState({cartItems})
}

removefromCart = (product)=>{
  const cartItems = this.state.cartItems.slice()
  this.setState({
      cartItems : cartItems.filter((x) => x._id !== product._id )
  });
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

                  <Products products = {this.state.products}
                            addToCart = {this.addToCart}/>
              </div>
              <div className='sidebar'>
                  <Cart cartItems={this.state.cartItems}
                  IncrementItem = {this.IncrementItem}
                  DecrementCount = {this.DecrementCount}
                  removefromCart = {this.removefromCart} />
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