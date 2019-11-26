import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import Rewards from './Rewards';
import Cart from './Cart';
import Coupon from './Coupon';
import Promotion from './Promotion';
import CategoryListing from './CategoryListing';
import ProductCard from './ProductCard';


const Main = () => (
  <main>
    <Switch>
        <Route exact path='/app/dashboard' component={Dashboard}/>
        <Route exact path='/app/category/:category' component={CategoryListing}/>
        <Route exact path='/app/product/:id' component={ProductCard}/>
        <Route exact path='/app/rewards' component={Rewards}/>
        <Route exact path='/app/coupon' component={Coupon}/>
        <Route exact path='/app/cart' component={Cart}/>
        <Route exact path='/app/promotion' component={Promotion}/>
    </Switch>
  </main>
)

export default Main;
