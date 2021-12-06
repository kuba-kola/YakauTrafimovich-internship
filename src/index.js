import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import EventService from './services/event-service';
import EventServiceContext from './components/event-service-context';
import store from './store';

import './index.scss';


const eventService = new EventService();

ReactDOM.render(
    <Provider store = {store}>
        <ErrorBoundry>
            <EventServiceContext.Provider value = {eventService}>
                <Router>
                    <App/>
                </Router>
            </EventServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root')
);