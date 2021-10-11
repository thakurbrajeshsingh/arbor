import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



// components
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import { TemplateProvider } from './template/TemplateProvider';
import ContextProvider from './context/ContextProvider';

const App = () => {
  return (
    <TemplateProvider>
      <ContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
    </TemplateProvider>
  );
}




export default App;