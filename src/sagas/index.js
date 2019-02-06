import { all, fork } from 'redux-saga/effects'
import { saga as Login } from '../container/Login'

export default function* rootSaga() {
  yield all([
    fork(Login.loginFlow)
  ])
}
