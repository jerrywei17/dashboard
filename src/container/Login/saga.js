import { take, call, put } from 'redux-saga/effects'
import {login, storeItem, clearItem} from '@/api'

function* authorize(username, password) {
  try {
    const token = yield call(login, username, password)
    yield put({type: 'LOGIN_SUCCESS', token})
    return token
  } catch(error) {
    yield put({type: 'LOGIN_ERROR', error})
  }
}

function* loginFlow() {
  while (true) {
    const {username, password} = yield take('LOGIN_START')
    const token = yield call(authorize, username, password)
    if (token) {
      yield call(storeItem, token)
      yield take('LOGOUT')
      yield call(clearItem, 'token')
    }
  }
}

export default {
  loginFlow
}
