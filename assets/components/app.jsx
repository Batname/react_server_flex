"use strict";

import React from "react";
import AppActions from "./../actions/app-actions";
import Catalog from "./app-catalog";
import Cart from "./app-cart";

let App =
  React.createClass({
    render:function(){
      return (
        <div>
          <h1>Let s Shop</h1>
          <Catalog />
          <h1>Cart</h1>
          <Cart />
        </div>
        )
    }
  });

export default App;