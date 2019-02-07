import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

function Left() {
  return null
}

function Content() {
  return null
}

function Right() {
  return null
}

const Container = styled.header`
position: fixed;
top: 0;
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 45px;
z-index: zIndex('highest');
background: #f2f5fa;
color: #666;
.header__child {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
}
.header__left,.header__right {
  flex: 0 0 auto;
  width: 60px;
}
.header__content {
  color: #000;
  flex: 1 0 auto;
}
`
class Header extends Component {
  static Left = Left
  static Content = Content
  static Right = Right

  render() {
    const {children} = this.props
    const left = children.find(child => child.type === Left)
    const content = children.find(child => child.type === Content)
    const right = children.find(child => child.type === Right)

    return (
        <Container>
          <div className="header__left header__child">
            {left ? left.props.children : null}
          </div>
          <div className="header__content header__child">
            {content ? content.props.children : null}
          </div>
          <div className="header__right header__child">
            {right ? right.props.children : null}
          </div>
        </Container>
    )
  }
}

Header.propTypes = {
  children: PropTypes.node.isRequired
};

export default Header
