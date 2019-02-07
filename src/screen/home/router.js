import asyncComponent from '@/component/AsyncComponent'

export const route = [{
  path: '/',
  exact: true,
  meta: {
    title: '首頁'
  },
  component: asyncComponent(() =>
    import ('./Home'))
}]
