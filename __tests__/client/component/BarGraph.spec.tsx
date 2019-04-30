import * as React from 'react';

import { mount } from 'enzyme';
import BarGraph, { Iprops } from '../../../src/client/components/BarGraph';

const setup = () => {
  const props: Iprops = {
    data: [
      {
        area: '高新南区',
        beginTime: '2018-12-27 09:00:00',
        endTime: '2018-12-29 18:00:00',
        name: '融创香璟台西苑',
        number: 56,
        status: '报名结束',
        _id: ''
      }
    ]
  };
  const wrapper = mount(<BarGraph {...props} />);
  return {
    props,
    wrapper
  };
};

describe('BarGraph 组件', () => {
  const { wrapper } = setup();
  const cheerioWrapper = wrapper.render();

  it('是否渲染成功 ?', () => {
    expect(wrapper.exists('.chart-title')).toBe(true);
    expect(cheerioWrapper.find('canvas').length).toBe(1);
  });

  it('title是否正确 ?', () => {
    expect(wrapper.find('.chart-title').text()).toEqual('月份统计图');
  });
});
