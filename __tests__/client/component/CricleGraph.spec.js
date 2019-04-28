import React from 'react';

import { mount } from 'enzyme';
import CricleGraph from '../../../src/client/components/CricleGraph';

const setup = () => {
  const props = {
    data: [
      {
        area: '高新南区',
        beginTime: '2018-12-27 09:00:00',
        endTime: '2018-12-29 18:00:00',
        name: '融创香璟台西苑',
        number: 56,
        status: '报名结束',
      },
    ],
  };
    /* eslint-disable */
  const wrapper = mount(<CricleGraph {...props} />);
  /* eslint-enable */
  return {
    props,
    wrapper,
  };
};

describe('CricleGraph 组件', () => {
  const { wrapper } = setup();
  const cheerioWrapper = wrapper.render();

  it('是否渲染成功 ?', () => {
    expect(wrapper.exists('.chart-title')).toBe(true);
    expect(cheerioWrapper.find('canvas').length).toBe(1);
  });

  it('shouldComponentUpdate ?', () => {
    const reMount = wrapper.setProps({
      data: [
        {
          area: '高新西区',
          beginTime: '2018-12-27 09:00:00',
          endTime: '2018-12-29 18:00:00',
          name: '花样年家天下',
          number: 22,
          status: '报名结束',
        },
      ],
    });
    expect(reMount.exists('.chart-title')).toBe(true);
    expect(reMount.render().find('canvas').length).toBe(1);
  });
});
