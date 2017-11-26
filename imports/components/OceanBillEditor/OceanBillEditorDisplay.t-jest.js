import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import OceanBillEditorDisplay, * as OBED from './OceanBillEditorDisplay.js';

describe('OceanBillEditorDisplay.js', () => {
  describe('OceanBillEditorDisplay Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<OceanBillEditorDisplay document={{}} />);
    });
    it('renders without crashing', () => {});
  });
  describe('OceanBillButton Component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<OBED.OceanBillButton document={{}} />);
    });
    it('opens a window on callback', () => {
      global.PDFDocument = () => ({
        pipe: function() {
          return this;
        },
        registerFont: function() {
          return this;
        },
        moveTo: function() {
          return this;
        },
        lineTo: function() {
          return this;
        },
        stroke: function() {
          return this;
        },
        font: function() {
          return this;
        },
        fontSize: function() {
          return this;
        },
        text: function() {
          return this;
        },
        write: function() {
          return this;
        },
      });
      global.blobStream = () => ({});
      wrapper.simulate('click');
    });
  });
  describe('handlePDF Function', () => {
    it('alerts if the window is blocked', () => {
      global.window = { open: jest.fn() };
      expect(() => OBED.handlePDF('a')).not.toThrow();
    });
  });
});
