import React from 'react'
import { store } from './configureStore'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './components/App'
import Index from './components/index'


const history = syncHistoryWithStore(browserHistory, store)

export default ()=>
    <Provider store={store}>
         <Router history={history} key={Math.random()}>
             <Route path='/' component={App}>
                 <IndexRoute component={Index} />
             </Route>
         </Router>
     </Provider>
