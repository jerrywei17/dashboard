import React, { Component } from 'react'
import styled from 'styled-components'
import { Provider, connect } from 'react-redux'
import configureStore from './store';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Top from '@/component/Header'
import Menu from '@/component/Menu'
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
const TopWithProp = connect(mapStateToProps, null)(({ title, toggleMask }) => (
  <Top>
    <Top.Left onClick={toggleMask}>
      <FontAwesomeIcon icon="bars" />
    </Top.Left>
    <Top.Content>
      {title}
    </Top.Content>
  </Top>
))

class App extends Component {
  state = {
    isMenuVisible: false
  }

  toggleMask () {
    this.setState({ isMenuVisible: !this.state.isMenuVisible })
  }

  render () {
    const { isMenuVisible } = this.state
    // const menuConfig = [
    //   {
    //     group: 'home', // 總覽
    //     title: '總覽',
    //     icon: 'HomeIcon',
    //     link: '/'
    //   },
    //   {
    //     group: 'reporting', // 報表管理
    //     title: '報表管理',
    //     icon: 'ReportingIcon',
    //     childPages: [
    //       { title: '遊戲報表', link: '/report/game'},
    //       { title: this.$t('nav.commission_report'), link: `/agent/commission?created_at_0=${beforeWeekDay}&created_at_1=${yesterday}`, show: () => this.isDistributor }
    //     ]
    //   }]
    return (
      <Provider store={store}>
        <Container>
          <TopWithProp toggleMask={this.toggleMask.bind(this)} />
          <Router>
            <Switch>
              <AuthRoute config={routes} />
            </Switch>
          </Router>
          <Menu visible={isMenuVisible} onClose={() => this.setState({isMenuVisible: false})}></Menu>
        </Container>
      </Provider>
    );
  }
}

export default App;
