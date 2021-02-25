//product-list
import React, {Component} from 'react'
import './App.css';
import data from './data.json';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      products: data.products,
      size:"",
      sort:"",
    };
  }
  sortProducts(event){
    console.log(event.target.value);
  }
  filterProducts=(event)=>{
    console.log(event.target.value);
    if(event.target.value===''){
      this.setState({size: event.target.value, product:data.products});
    } else{
      this.setState({
        size: event.target.value,
        products:data.products.filter
        (product=>product.availableSizes.indexOf(event.target.value)>=0),
      });
    }
    
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
            <Filter
              count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
            />
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
