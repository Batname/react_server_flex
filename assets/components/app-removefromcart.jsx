"use strict";

import React from "react";
import AppActions from "./../actions/app-actions";

let RemoveFromCart =
  React.createClass({
    handleClick:function(){
      AppActions.removeItem(this.props.index);
    },
    render:function(){
      return (
        <div>
          <button onClick={this.handleClick}>x</button>
        </div>
        )
    }
  });

export default RemoveFromCart;