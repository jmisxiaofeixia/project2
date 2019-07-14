import * as actions from './actions'
import {app} from './reducers'
import {createStore}  from 'redux'

let store = createStore(app)
store.actions = actions
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
unsubscribe();
export default store