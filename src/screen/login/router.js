import asyncComponent from '@/component/AsyncComponent'

export const route = [{
  path: '/login',
  exact: true,
  meta: {
    title: '登入'
  },
  component: asyncComponent(() =>
    import ('./Login'))
}]
