import { createAction } from 'redux-actions'

export const updateRoute = createAction('UPDATE_ROUTE', (payload) => payload)
export const loginStart = createAction('LOGIN_START', (payload) => payload)
