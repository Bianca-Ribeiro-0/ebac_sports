// store/index.ts
import { createStore, combineReducers } from 'redux'
import carrinhoReducer from './reducers/Carrinho'
import favoritosReducer from './reducers/favoritos'

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  favoritos: favoritosReducer
})

const store = createStore(rootReducer)

export default store
