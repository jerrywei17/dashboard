import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { updateRoute } from '@/actions'

class AuthRoute extends Component {
  render(){
    const { location, config, updateRoute } = this.props
    const { pathname } = location
    const targetRouterConfig = config.find((v) => v.path === pathname)
    const { component } = targetRouterConfig
    updateRoute(targetRouterConfig.meta)
    return <Route exact path={pathname} component={component} />
  }
}

AuthRoute.propTypes = {
  location: PropTypes.object,
  config: PropTypes.array.isRequired,
  updateRoute: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  updateRoute: (payload) => {
    dispatch(updateRoute(payload))
  }
})

export default connect(null, mapDispatchToProps)(AuthRoute)
