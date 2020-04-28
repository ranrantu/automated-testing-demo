// 与react的enzyme类似
import {
  // 浅渲染
  shallowMount,
  // 真实渲染
  mount
} from '@vue/test-utils'
import Counter from '../../src/components/counter'
import { expect } from 'chai'

describe('测试商品加入购物车', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).include('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).to.be.true
  })

  it('button should increment the count', () => {
    expect(wrapper.vm.count).to.equal(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).to.equal(1)
  })
})
