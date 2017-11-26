import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import InputField from './InputField.js';

describe('InputField', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<InputField />);
  });
  it('calls extracts the target value on change', () => {
    const onChange = jest.fn();
    wrapper.setProps({ onChange });
    wrapper.simulate('change', { target: { value: 'a' } });
    expect(onChange).toHaveBeenCalledWith('a');
  });
});
