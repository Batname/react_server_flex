"use strict";

import React from "react";
import AppActions from "./../actions/app-actions";

let AddToCart =
  React.createClass({
    handleClick:function(){
      AppActions.addItem(this.props.item);
    },
    render:function(){
      return (
        <div>
          <button onClick={this.handleClick}>Add To cart</button>
        </div>
        )
    }
  });

export default AddToCart;