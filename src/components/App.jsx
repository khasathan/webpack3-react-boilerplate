import React from 'react';
import Router from 'react-router-dom/Router';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import createHistory from 'history/createBrowserHistory';

import About from './About';
import Home from './Home';
import NotFound from './NotFound';
import SemanticUI from './SemanticUI';

import 'semantic-ui-css/semantic.min.css';

const history = createHistory({
    basename: '',
    forceRefresh: false,
    keyLength: 6,
    getUserConfirmation: (message, callback) => callback(window.confirm(message)),
});

class App extends React.Component {
    render () {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/ui" component={SemanticUI} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
