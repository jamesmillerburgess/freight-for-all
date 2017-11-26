import * as reducers from './reducers';
import * as AT from './actionTypes';

describe('reducers.js', () => {
  describe('oceanBillEditor', () => {
    it('sets props', () => {
      const state = { a: 'b' };
      const action = {
        type: AT.SET_OCEAN_BILL_EDITOR_PROP,
        prop: 'a',
        value: 'c',
      };
      expect(reducers.oceanBillEditor(state, action).a).toBe('c');
    });
    it('does nothing by default', () => {
      const state = { a: 'b' };
      const action = {
        type: 'INVALID',
        prop: 'a',
        value: 'c',
      };
      expect(reducers.oceanBillEditor(state, action)).toBe(state);
    });
    it('handles missing parameters', () => {
      expect(reducers.oceanBillEditor).not.toThrow();
    });
  });
});
