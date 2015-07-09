import React, {PropTypes} from 'react';
import AppActions from '../../actions/app-actions';

let AddToCart =
  React.createClass({
    propTypes: {
      item: PropTypes.object
    },
    handleClick: function(){
      AppActions.addItem(this.props.item);
    },
    render: function(){
      return (
        <div>
          <button className="btn btn-default" onClick={this.handleClick}>Add To cart</button>
        </div>
        );
    }
  });

export default AddToCart;

