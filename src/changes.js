// BitMonster = require('./bitmonster/lib/BitMonster.js')
//@TODO: remove scss and all styling. Notifications should be an event
// import './bitmonster/lib/BitMonster.scss'
import BitMonster from './bitmonster/lib/BitMonster.js'
class Changes{
  constructor(key, dostow_host){
    this._dostow_host = dostow_host
    this._key = key
    this._bm = new BitMonster(this._dostow_host)
    this._store = this._bm.module("store")
    this._callbacks = {}
    this._fails = {}
    this._on_change = this._on_change.bind(this);
    this._store.on("onRowChanged", this._on_change);
  }
  _on_change(data){
    let fn = this._callbacks[data.store]
    if (fn){
      fn(data.new)
    }
  }
  // _addListener
  watch(store, filter, success, failed){
    self = this
    if (this._callbacks[store] || this._fails[store]){
      failed("store listener already exists")
      return
    }
    const successFn = success?function(data) {
      // setTimeout(() => success(data), 100) 
     success(data) 
    }:null
		this._callbacks[store] = success
		this._fails[store] = failed 
    this._store.call("changes", {
			Store:  store,
      Key:  this._key,
			Filter: filter
		}, successFn, function(err) {
      failed(err);
		})
  }

  stop(store){
    delete this._callbacks[store]
    delete this._fails[store]
  }
}
export default Changes
