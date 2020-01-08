import React from 'react';
import Title from './Title';
import { connect } from 'react-redux';
import Preview from './Preview';
import Editor from './Editor';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import '../style/App.css';
import '../style/Header.css';


function App() {
    return (
        <>
         <header>
            <h1> Maker</h1>
            <nav>
                <Switch>
                    <Route exact path={ [`/:id`, `/new`] }>
                        <Link to={ `/` }>HOME</Link>
                    </Route>
                </Switch>
            </nav>
        </header>
        <article className="App">
           
            <Title />
            <Editor />
            <Preview />
        </article>
        </>
    );
}

export default connect()(App);
