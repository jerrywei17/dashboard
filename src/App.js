import React, { Component } from 'react'
import styled from 'styled-components'
import { Provider, connect } from 'react-redux'
import configureStore from './store';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Top from '@/component/Header'
import AuthRoute from '@/component/AuthRoute'

library.add(faBars)

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

const mapStateToProps = (state) => {
  const title = state.route.title
  return {
    title
  };
};
const TopWithProp = connect(mapStateToProps, null)(({title}) => (
  <Top>
    <Top.Left>
      <FontAwesomeIcon icon="bars" />
    </Top.Left>
    <Top.Content>
      {title}
    </Top.Content>
  </Top>
))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <TopWithProp/>
          <Router>
            <Switch>
              <AuthRoute config={routes} />
            </Switch>
          </Router>
        </Container>
      </Provider>
    );
  }
}

export default App;
