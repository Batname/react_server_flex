"use strict";

import React from "react";
import AppActions from "./../actions/app-actions";

let App =
  React.createClass({
    handleClick:function(){
      AppActions.addItem('this is the item');
    },
    render:function(){
      return (
        <div>
          <h1 onClick={this.handleClick}>MY FLUX APP</h1>
        </div>
        )
    }
  });

export default App;