"use strict";

import AppDispatsher from "./../dispatchers/app-dispatcher";
import AppConstants from "./../constants/app-constants";
import eventEmitter from 'events';

let EventEmitter = eventEmitter.EventEmitter;

const CHANGE_EVENT = "chenge";

let _catalog = [
  {id:1, title: "Widget #1", cost:1},
  {id:2, title: "Widget #2", cost:2},
  {id:3, title: "Widget #3", cost:3}
];

let _cartItems = [];

function _removeItem (index) {
  _cartItems[index].inCart = false;
  _cartItems.splice(index, 1);
};

function _increaseItem (index) {
  _cartItems[index].qty++;
};

function _decreaseItem (index) {
  if(_cartItems[index].qty > 1) {
    _cartItems[index].qty--;
  } else {
    _removeItem(index);
  }
};

function _addItem(item){
  if(!item.inCart){
    item['qty'] = 1;
    item['inCart'] = true;
    _cartItems.push(item);
  }
  else {
    _cartItems.forEach(function(cartItem, i){
      if(cartItem.id===item.id){
        _increaseItem(i);
      }
    });
  }
};

class AppStore extends EventEmitter {

  emitChange() {
    this.emit(CHANGE_EVENT)
  }

  addChangeListener(callback){
     this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener(callback){
     this.removeListener(CHANGE_EVENT, callback)
  }

  getCart(){
     return _cartItems;
  }

  getCatalog(){
      return _catalog
  }

  dispatcherIndex(payload){
    console.log(payload, "dispatcherIndex");
    new AppDispatcher.register(function(payload){
      let action = payload.action;
      switch(action.actionType){
        case AppConstants.ADD_ITEM:
          _addItem(payload.action.item);
          break;

        case AppConstants.REMOVE_ITEM:
          _removeItem(payload.action.index);
          break;

        case AppConstants.INCREASE_ITEM:
          _increaseItem(payload.action.index);
          break;

        case AppConstants.DECREASE_ITEM:
          _decreaseItem(payload.action.index);
          break;
      }
      this.emitChange();

      return true;
    })
  }
};

export default AppStore;