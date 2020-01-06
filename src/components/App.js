import React from 'react';
import Title from './Title';
import { connect } from 'react-redux';
import Preview from './Preview';
import Editor from './Editor';
// import Header from './Header';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';

import '../style/App.css';

function App() {
    return (
        <>
        <Switch>
                    <Route exact path={ [`/:id`, `/new`] }>
                        <Link to={ `/` }>HOME</Link>
                    </Route>
                </Switch>
        <article className="App">
           
            <Title />
            <Editor />
            <Preview />
        </article>
        </>
    );
}

export default connect()(App);
