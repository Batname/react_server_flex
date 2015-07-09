import React from 'react';
import AppStore from '../../stores/app-store';
import RemoveFromCart from './app-removefromcart';
import Increase from './app-increase';
import Decrease from './app-decrease';
import storeWhatchMixin from '../../mixins/StoreWatchMixin';
import {Link} from 'react-router-component';

function cartItem () {
  return {items: AppStore.getCart()};
}

let Cart = React.createClass({
  mixins: [storeWhatchMixin(cartItem)],
  render() {
    let total = 0;
    let items = this.state.items.map((item, i) =>{
      let subtotal = item.cost * item.qty;
      total += subtotal;
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
        );
    });
    return (
      <div>
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
        <Link href="/">Continue shopping</Link>
       </div>
      );
  }
});

export default Cart;
