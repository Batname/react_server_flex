import React, {PropTypes} from 'react';
import AppActions from '../../actions/app-actions';

let Increase =
  React.createClass({
    propTypes: {
      index: PropTypes.number
    },
    handleClick: function(){
      AppActions.increaseItem(this.props.index);
    },
    render: function(){
      return (
        <div>
          <button onClick={this.handleClick}>+</button>
        </div>
        );
    }
  });

export default Increase;
