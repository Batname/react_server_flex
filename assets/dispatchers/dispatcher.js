"use strict";

import promise from "es6-promise";

let Promise = promise.Promise;

let _callbacks = [];
let _promises = [];


let _addPromise = function(callback, payload) {

  _promises.push(new Promise(function(resolve, reject) {
    if (callback(payload)) {
      resolve(payload);
    } else {
      reject(new Error('Dispatcher callback unsuccessful'));
    }
  }));
};

let _clearPromises = function() {
  _promises = [];
};

class Dispatcher {
  dispatch(payload) {
    _callbacks.forEach((callback) => {
      _addPromise(callback, payload);
    });
    Promise.all(_promises).then(_clearPromises);
  }
  register(callback) {
      _callbacks.push(callback);
      return _callbacks.length - 1; // index
  }
};

export default Dispatcher;
