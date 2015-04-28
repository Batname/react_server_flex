"use strict";

import React from "react";
import AppActions from "./../actions/app-actions";

let Decrease =
  React.createClass({
    handleClick:function(){
      AppActions.decreaseItem(this.props.index);
    },
    render:function(){
      return (
        <div>
          <button onClick={this.handleClick}>-</button>
        </div>
        )
    }
  });

export default Decrease;