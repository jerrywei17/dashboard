import React, {
  Component
} from 'react'
import Transition from 'react-transition-group/Transition'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const transformFunc = ({
  state
}) => {
  switch (state) {
    case 'entering':
    case 'entered':
    case 'exiting':
      return 'translate3d(0, 0, 0);'
    default:
      return 'translate3d(-100%, 0, 0);'
  }
}
const opacityFunc = ({
  state
}) => {
  switch (state) {
    case 'entering':
    case 'entered':
      return .4
    default:
      return 0
  }
}

const Panel = styled.div `
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
background: #25262d;
transition: opacity 300ms ease-in-out;
transform: ${transformFunc};
opacity: ${opacityFunc};
`

class Mask extends Component {
  render() {
    return (
      <Transition in={this.props.visible} timeout={300}>
        {
          (state) => <Panel state={state} onClick={this.props.onClose}></Panel>
        }
      </Transition>
    )
  }
}

Mask.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Mask;
