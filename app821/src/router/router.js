import React from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import asyncComponent from './AsyncComponent'

const Home = asyncComponent(() => import('../pages/Home/Home'))
const Page1 = asyncComponent(() => import('../pages/Page1/Page1'))

const getRouter = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>首页</Link></li>
        <li><Link to='/page1'>Page1</Link></li>
      </ul>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/page1' component={Page1} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default getRouter
