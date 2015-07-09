import React, {PropTypes} from 'react';
import AppActions from '../../actions/app-actions';

let RemoveFromCart =
  React.createClass({
    propTypes: {
      index: PropTypes.number
    },
    handleClick: function(){
      AppActions.removeItem(this.props.index);
    },
    render: function(){
      return (
        <div>
          <button onClick={this.handleClick}>x</button>
        </div>
        );
    }
  });

export default RemoveFromCart;
