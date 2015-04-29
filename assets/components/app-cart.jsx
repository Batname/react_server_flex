"use strict";

import React from "react";
import AppStore from "./../stores/app-store";
import RemoveFromCart from "./app-removefromcart.jsx";
import Increase from "./app-increase.jsx";
import Decrease from "./app-decrease.jsx";

function cartItems() {
  return {items: AppStore.getCart()}
};

let Cart = React.createClass({
  getInitialState: function() {
    return cartItems();
  },
  componentWillMount: function() {
    AppStore.addChangeListener(this._onChange)
  },
  _onChange: function() {
    this.setState(cartItems())
  },
  render: function() {

    let total=0;
    let items = this.state.items.map(function(item, i){
      let subtotal = item.cost*item.qty;
      total+=subtotal;
      return (
        <tr key={i}>
          <td><RemoveFromCart index={i} /></td>
          <td>{item.title}</td>
          <td>{item.qty}</td>
          <td>
            <Increase index={i} />
            <Decrease index={i} />
          </td>
          <td>${subtotal}</td>
        </tr>
        )
    })
    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Qty</th>
              <th></th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="text-right">Total</td>
              <td>${total}</td>
            </tr>
          </tfoot>
        </table>
      )
  }
});

export default Cart;