import asyncComponent from '@/component/AsyncComponent'

export const route = [{
  path: '/login',
  exact: true,
  component: asyncComponent(() =>
    import ('./Login'))
}]
