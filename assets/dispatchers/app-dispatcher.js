import Dispatcher from './dispatcher';
import _ from 'lodash';

let AppDispatcher = _.merge(Dispatcher.prototype, {
  handleViewAction: function(action){
    console.log('action', action);
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

export default AppDispatcher;
