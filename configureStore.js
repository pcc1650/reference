import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { browserHistory } from 'react-router'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { rootReducer } from './reducers'
import { sagas } from './sagas'


const reducer = combineReducers({ ...rootReducer, routing: routerReducer })
const routerHistoryMiddleware = routerMiddleware(browserHistory)
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer, composeEnhancers(applyMiddleware(routerHistoryMiddleware, sagaMiddleware)))

sagaMiddleware.run(sagas)
