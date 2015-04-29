"use strict";

import React from "react";
import AppStore from "./../stores/app-store";
import AddToCart from "./app-addtocart.jsx";

function getCatalog () {
  return {items: AppStore.getCatalog()}
}

let Catalog =
  React.createClass({
    getInitialState: function () {
      return getCatalog();
    },
    render: function() {
      let items = this.state.items.map(function(item) {
        return <tr><td>{item.title}</td><td>${item.cost}</td><td><AddToCart item={item} /></td></tr>
      });
      return (
        <table className="table table-hover">
        {items}
        </table>
        )
    }
  });

export default Catalog;