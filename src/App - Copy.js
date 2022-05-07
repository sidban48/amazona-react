import React from 'react';
import './App.css';
import data from './data.json'
import Products from './components/Products';
import Filter from './components/Filter';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            size: "",
            sort: ""
        };
    }
    filterProducts(event){
        // console.log(event.target.value)
        console.log("sid is here");
    }
    sortProducts(event){

        console.log("sid is here now")
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
                    <Filter count = {this.state.products.length + " Products "}>
                        size={this.props.size};
                        sort= {this.props.sort};
                        filterProducts = {this.props.filterProducts};
                        sortProducts = {this.props.sortProducts};
                    </Filter>
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