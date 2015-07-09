import React from 'react';
import AddToCart from '../catalog/app-addtocart.js';
import {Link} from 'react-router-component';
import AppStore from '../../stores/app-store.js';
import StoreWatchMixin from '../../mixins/StoreWatchMixin.js';


function getCatalogItem(component){
  let thisItem;
  AppStore.getCatalog().forEach((item) =>{
    if(item.id.toString() === component.props.item){
      thisItem = item;
    }
  });
  return {item: thisItem};
}

let CatalogDetail =
  React.createClass({
    mixins: [new StoreWatchMixin(getCatalogItem)],
    render(){
      return (
          <div>
            <h2>{this.state.item.title}</h2>
            <img src={this.state.item.img} alt="" />
            <p>{this.state.item.description}</p>
            <p>${this.state.item.cost} <span className="text-success">{this.state.item.inCart && '(' + this.state.item.qty + ' in cart)'}</span></p>
            <div className="btn-group btn-group-sm">
              <AddToCart item={this.state.item} />
              <Link href={'/'} className="btn btn-default">Continue Shopping</Link>
            </div>
          </div>
        );
    }
  });

export default CatalogDetail;
