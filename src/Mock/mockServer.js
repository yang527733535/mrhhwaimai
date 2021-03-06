// 使用mockjs提供数据接口

import Mock from 'mockjs'
import data from './data.json'

// 返回goods的接口
Mock.mock('/goods', {
  code: 0,
  data: data.goods
})
// 返回ratings的接口
Mock.mock('/ratings', {
  code: 0,
  data: data.ratings
})
// 返回info的接口
Mock.mock('/info', {
  code: 0,
  data: data.info
})

//  export default 这里不需要暴露任何数据 因为全局有了mock
//  只要保证能执行一次就可以
