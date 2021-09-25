import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



// components
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import { TemplateProvider } from './template/TemplateProvider';


const App = () => {
  return (
    <TemplateProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </BrowserRouter>
    </TemplateProvider>
  );
}




export default App;