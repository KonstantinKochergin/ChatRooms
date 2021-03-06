import React from 'react';
import './App.css';
import ChatsListScreen from './pages/ChatsListScreen/ChatsListScreen'
import ChatScreen from './pages/ChatScreen/ChatScreen'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/rooms' exact>
            <ChatsListScreen/>
          </Route>
          <Route path='/chat'>
            <ChatScreen/>
          </Route>
          <Router path='/' exact>
            <ChatsListScreen/>
          </Router>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
