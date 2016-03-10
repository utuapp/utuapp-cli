/*
* @Author: CC
* @Date:   2016-03-10 10:30:59
* @Last Modified by:   CC
* @Last Modified time: 2016-03-10 11:55:07
*/
/* global describe, it, expect */

import Vue from 'vue';
import Hello from '../../src/components/Hello';

describe('Hello', () => {
  it('should render `Hello`', () => {
    const vm = new Vue({
      template: '<div><hello></hello></div>',
      components: { Hello },
    }).$mount();
    expect(vm.$el.textContent.trim()).toBe('Hello');
  });
});
