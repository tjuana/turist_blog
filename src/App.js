import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { store } from './store/configureStore.jsx'
import Blogs from './components/Blogs/Blogs'
import { Fragment } from 'react'

const App = () => (
  <>
    {/* <Provider store={store}> */}
      <Router>
        <Fragment>
          <Route exact path='/' component={Blogs}/>
        </Fragment>
      </Router>
    {/* </Provider> */}
  </>
)

export default App

export { App as AppSnap }
