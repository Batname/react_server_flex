"use strict";

import Dispatcher from "./dispatcher";

class AppDispatcher extends Dispatcher {
  handleViewAction(action){
    console.log('action', action);
    this.dispatch({
      source: 'VIEW_ACTION',
      action:action
    })
  }
}
export default AppDispatcher;