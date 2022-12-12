import React from 'react';
import Cartitem from './Cartitem'

const Cart =(props)=> {

    const { products } = props;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <Cartitem
              product={product}
              key={product.id}
              onIncreaseQuantity={props.onIncreaseQuantity}
              onDecreaseQuantity = {props.onDecreaseQuantity}
              onProductDelete={props.onProductDelete}
            />
          )
        })}
      </div>
    );
}

export default Cart;