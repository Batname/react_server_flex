import AppStore from '../stores/app-store';

let StoreWatchMixin = (cb) =>{
  return {
    getInitialState() {
      return cb(this);
    },
    componentWillMount() {
      AppStore.addChangeListener(this._onChange);
    },
    componentWillUnount(){
      AppStore.removeChangeListener(this._onChange);
    },
    _onChange() {
      this.setState(cb(this));
    }
  };
};

export default StoreWatchMixin;
