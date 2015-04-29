"use strict";

import promise from "es6-promise";
import _ from "lodash";

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

let Dispatcher = function() {};
Dispatcher.prototype = _.merge(Dispatcher.prototype, {

  register: function(callback) {
    _callbacks.push(callback);
    return _callbacks.length - 1; // index
  },

  dispatch: function(payload) {
    _callbacks.forEach(function(callback) {
      _addPromise(callback, payload);
    });
    Promise.all(_promises).then(_clearPromises);
  }

});

export default Dispatcher;
