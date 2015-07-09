import React from 'react';
import Catalog from './catalog/app-catalog';
import Cart from './cart/app-cart';
import CatalogDetail from './product/app-catalogdetails';
import Template from './app-template';
import Router from 'react-router-component';

let Locations = Router.Locations;
let Location = Router.Location;

let App =
  React.createClass({
    render: function(){
      return (
        <Template>
          <Locations>
            <Location path="/" handler={Catalog} />
            <Location path="/cart" handler={Cart} />
            <Location path="/item/:item" handler={CatalogDetail} />
          </Locations>
        </Template>
        );
    }
  });

export default App;
