import AppDispatcher from '../dispatchers/app-dispatcher.js';
import AppConstants from '../constants/app-constants.js';
import eventEmitter from 'events';
import _ from 'lodash';

let EventEmitter = eventEmitter.EventEmitter;

const CHANGE_EVENT = 'chenge';

let _catalog = [];

_.times(9, (n)=>{
  let i = n + 1;
  _catalog.push({
    'id': `Widget ${i}`,
    'title': `Widget # ${i}`,
    'summary': 'My summary',
    'description': 'My description',
    'img': '/images/product.png',
    'cost': i
  });
});

let _cartItems = [];

function _removeItem (index) {
  _cartItems[index].inCart = false;
  _cartItems.splice(index, 1);
}

function _increaseItem (index) {
  _cartItems[index].qty++;
}

function _decreaseItem (index) {
  if(_cartItems[index].qty > 1) {
    _cartItems[index].qty--;
  } else {
    _removeItem(index);
  }
}

function _addItem(item){
  if(!item.inCart){
    item.qty = 1;
    item.inCart = true;
    _cartItems.push(item);
  }
  else {
    _cartItems.forEach(function(cartItem, i){
      if(cartItem.id === item.id){
        _increaseItem(i);
      }
    });
  }
}

function _cartTotals(){
  let qty = 0, total = 0;
  _cartItems.forEach((cartItem) => {
    qty += cartItem.qty;
    total += cartItem.qty * cartItem.cost;
  });
  return {'qty': qty, 'total': total};
}

let AppStore = _.merge(EventEmitter.prototype, {
  emitChange(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCart(){
    return _cartItems;
  },

  getCatalog(){
    return _catalog;
  },

  getCartTotals(){
    return _cartTotals();
  },

  dispatcherIndex: AppDispatcher.register((payload) =>{
    let action = payload.action; // this is our action from handleViewAction
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
    AppStore.emitChange();

    return true;
  })
});

export default AppStore;
