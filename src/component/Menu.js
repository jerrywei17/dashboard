import React, {
  Component
} from 'react'
import Transition from 'react-transition-group/Transition'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Mask from './Mask'

const slideInOutFunc = ({state}) => {
  switch (state) {
    case 'entering':
    case 'entered':
    // case 'exiting':
      return 'translate3d(0, 0, 0);'
    default:
      return 'translate3d(-100%, 0, 0);'
  }
}

const Menu = styled.div`
position: absolute;
top: 0;
left: 0;
bottom: 0;
width: 220px;
background: #424242;
font-size: 16px;
color: #fff;
height: 100%;
transition: transform 300ms ease-in-out;
transform: ${slideInOutFunc};

.menu {
  .menu-title {
    padding-top: 29px;
    padding-bottom: 5px;
    font-size: 18px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
    background-color: #424242;
    color: #fff;
  }
  .menu-item, {
    display: flex;
    align-items: center;
    height: 44px;
    padding-left: 30px;
    opacity: .5;
  }
  .submenu {
    .submenu-title {
      position: relative;
      display: flex;
      align-items: center;
      height: 44px;
      padding: 0 30px 0 30px;
      opacity: .5;
      .arrow {
        position: absolute;
        top: 14px;
        right: 20px;
        fill: #fff;
        width: 16px;
        height: 16px;
        transform-origin: center;
        transition: transform .3s ease-in-out;
      }
    }
    .sub-title {
      padding-left: 65px;
    }
    .menu-item {
      display: none;
      font-weight: 300;
    }
    &.active {
      color: #fff;
      .submenu-title {
        background-color: rgba(255, 255, 255, 0.2);
        opacity: 1;
        .arrow {
          transform: rotate(180deg);
        }
      }
      .menu-item {
        display: flex;
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.15);
      }
    }
  }
}
`
const menuConfig = [
  {
    group: 'home', // 總覽
    title: '總覽',
    icon: 'HomeIcon',
    link: '/'
  },
  {
    group: 'reporting', // 報表管理
    title: '報表管理',
    icon: 'ReportingIcon',
    childPages: [
      { title: '遊戲報表', link: '/report/game'},
      { title: '財務報表', link: '/report/finance'}
    ]
  }]

const MenuItem = (props) => {
  return (
    <li className="submenu">
      <div className="submenu-title">
        <span className="title">{props.title}</span>
        <div className="arrow">
          <svg width="100%" height="100%" viewBox="0 0 18 18" fit="" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M3.5 4.5L2 6l7 7 7-7-1.5-1.5L9 10 3.5 4.5z" fillRule="evenodd"></path></svg>
        </div>
      </div>
      <ul>
        <li className="menu-item sub-title"></li>
      </ul>
    </li>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired
}


class MenuWrapper extends Component {
  render() {


    return (
      <div>
        <Mask visible={this.props.visible} onClose={this.props.onClose}></Mask>
        <Transition in={this.props.visible} timeout={300}>
          {
            (state) =>
              <Menu state={state}>
                <ul className="menu">
                  <li className="menu-item menu-title">菜单</li>
                  {menuConfig.map((item, index) => <MenuItem {...item} key={index}/>)}
                </ul>
              </Menu>
          }
        </Transition>
      </div>
    )
  }
}

MenuWrapper.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default MenuWrapper;
