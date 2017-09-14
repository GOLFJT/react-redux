import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import rootReducers from './reducers'
import App from './components/App'
import thunk from 'redux-thunk'

// const thunk = (store) => (next) => (action) => {
//   if(typeof action === 'function'){  
//       next(action)
//   }
// }

let store = createStore(
  rootReducers,
  applyMiddleware(thunk)
)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
