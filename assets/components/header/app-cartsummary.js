import React from 'react';
import {Link} from 'react-router-component';
import AppStore from '../../stores/app-store';
import storeWatchMixin from '../../mixins/StoreWatchMixin';

function cartTotals () {
  return AppStore.getCartTotals();
}

let CartSummary = {
  mixins: [storeWatchMixin(cartTotals)],
  render(){
    return (
          <div>
            <Link
              href="/cart"
              className="btn btn-success">
              Cart Items: {this.state.qty} / ${this.state.total}
              </Link>
          </div>
      );
  }
};

export default React.createClass(CartSummary);
