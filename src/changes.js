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
  watch(store, filter, success, fail){
    if (this._callbacks[store]){
      fail("store listener already exists")
      return
    }
    this._store.call("changes", {
			store:  store,
      key:  this._key,
			filter: filter
		}, function(data) {
			this._callbacks[store] = success
      success(data)
		}, function(err) {
			this._fails[store] = fail
			fail(err);
		})
  }

  stop(store){
    delete this._callbacks[store]
    delete this._fails[store]
  }
}

export default Changes
