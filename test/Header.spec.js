import { mount } from '@vue/test-utils'
import SiteHeader from '@/components/Header.vue'

describe('SiteHeader', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SiteHeader)
    expect(wrapper.vm).toBeTruthy()
  })
})
