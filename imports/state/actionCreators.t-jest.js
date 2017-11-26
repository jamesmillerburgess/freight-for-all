import * as AC from './actionCreators';
import * as AT from './actionTypes';

describe('actionCreators.js', () => {
  describe('setOceanBillProp Function', () => {
    it('creates the appropriate action', () => {
      const action = AC.setOceanBillProp('prop', 'value');
      expect(action.type).toBe(AT.SET_OCEAN_BILL_EDITOR_PROP);
      expect(action.prop).toBe('prop');
      expect(action.value).toBe('value');
    });
  });
});
