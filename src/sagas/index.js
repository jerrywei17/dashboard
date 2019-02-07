import { all, fork } from 'redux-saga/effects'
import { loginFlow } from './login'

export default function* rootSaga() {
  yield all([
    fork(loginFlow)
  ])
}
