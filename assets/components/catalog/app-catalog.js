import React from 'react';
import AppStore from './../../stores/app-store';
import CatalogItem from './app-catalogitem';
import storeWatchMixin from '../../mixins/StoreWatchMixin';

function getCatalog () {
  return {items: AppStore.getCatalog()};
}

let Catalog =
  React.createClass({
    mixins: [storeWatchMixin(getCatalog)],
    render: function() {
      let items = this.state.items.map(function(item) {
        return <CatalogItem item={item} />;
      });
      return (
        <div className="row">
        {items}
        </div>
        );
    }
  });

export default Catalog;

