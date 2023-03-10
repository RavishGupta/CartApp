import React from 'react';
import './App.css';
import Cart from './cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1860&q=80',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1720&q=80',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity=(product)=>{
    console.log('heyy please dec the qty of', product);
    const {products}= this.state;
    const index = products.indexOf(product);

    if(products[index].qty===0){
        return;
    }
    products[index].qty-=1;

    this.setState({
        products
    })
  }
  handleDeleteProduct=(id)=>{
    const {products} = this.state;
    const items = products.filter((item)=> item.id!==id)

    this.setState({
        products:items 
    })
  }
  getCartCount=()=>{
    const {products} = this.state;
    let count = 0 ;
    products.forEach((product)=>{
      count+=product.qty
    })
    return count;
  }
  getCartTotal=()=>{
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product)=>{
      cartTotal=cartTotal+product.qty* product.price
    })
    return cartTotal;
  }
  render(){
    const {products} = this.state;
  return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart
        products= {products}
         onIncreaseQuantity={this.handleIncreaseQuantity}
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onProductDelete={this.handleDeleteProduct}
        />
        <div style={{padding:10 , fontSize:20}}>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}
export default App;
