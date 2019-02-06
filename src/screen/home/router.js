import asyncComponent from '@/component/AsyncComponent'

export const route = [{
  path: '/',
  exact: true,
  component: asyncComponent(() =>
    import ('./Home'))
}]
