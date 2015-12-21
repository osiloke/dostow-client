// BitMonster = require('./bitmonster/lib/BitMonster.js')
class Changes{
  constructor(key, dostow_host){
    this._dostow_host = dostow_host
    this._key = key
    this._bm = new BitMonster(this._dostow_host)
    this._store = this._bm.module("store")
    this._callbacks = {}
    this._fails = {}
    this._store.on("onRowChanged", this._on_change);
  }
  _on_change(data){

  }
  // _addListener
  watch(store, filter, success, failed){
    self = this
    if (this._callbacks[store] || this._fails[store]){
      failed("store listener already exists")
      return
    }
		this._callbacks[store] = success
		this._fails[store] = failed
    this._store.call("changes", {
			Store:  store,
      Key:  this._key,
			Filter: filter
		}, function(data) {
      success(data)
		}, function(err) {
      failed(err);
		})
  }

  stop(store){
    delete this._callbacks[store]
    delete this._fails[store]
  }
}

export default Changes
