import React, { Component } from 'react';
import styled from 'styled-components'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import configureStore from './store';
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore()
const Container = styled.div`
  text-align: center;
  .App-header {
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    height: 46px;
  }
`

const routes = [
    ...require('@/screen/home/router').route,
    ...require('@/screen/login/router').route
]

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <header className="App-header">
          </header>
          <Router>
            {renderRoutes(routes)}
          </Router>
        </Container>
      </Provider>
    );
  }
}

export default App;
