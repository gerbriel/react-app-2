//product-list
import React, {Component} from 'react'
import './App.css';
import data from './data.json';
import Products from './components/Products/Products';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      products: data.products,
      size:"",
      sort:"",
    };
  }

  render() {
    return(
      <div className='grid-container'>
        <header>
          <a heref='/'>React store</a>
        </header>
        <main>
          <div className='content'>
            <div className='main'>
              <Products products={this.state.products}/>
            </div>
            <div className='sidebar'>
              cart items
            </div>
          </div>
        </main>
        <footer>
          all rights reserved
        </footer>
      </div>
    )};
  
}

export default App;
