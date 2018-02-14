import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logger from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App';
import Orders from './pages/orders/Orders';
import NewOrder from './pages/new-order/NewOrder';
import reducers from './reducers/index';



const store = createStore(
  reducers,
  applyMiddleware(logger)
);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/orders" component={Orders} />
                <Route path="/new-order" component={NewOrder} />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));
