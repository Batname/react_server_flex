import React from 'react';
import Catalog from './catalog/app-catalog';
import Cart from './cart/app-cart';

let App =
  React.createClass({
    render: function(){
      return (
        <div>
          <h1>Let s Shop</h1>
          <Catalog />
          <h1>Cart</h1>
          <Cart />
        </div>
        );
    }
  });

export default App;
