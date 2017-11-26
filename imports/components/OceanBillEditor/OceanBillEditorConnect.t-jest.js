import * as OBEC from './OceanBillEditorConnect';
import { mapStateToProps, mapDispatchToProps } from './OceanBillEditorConnect';

describe('OceanBillEditorConnect.js', () => {
  describe('mapStateToProps Function', () => {
    it('maps a document object', () => {
      expect(mapStateToProps({ oceanBillEditor: {} })).toHaveProperty(
        'document'
      );
    });
    it('maps dispatchers', () => {
      expect(() => mapDispatchToProps(jest.fn()).setShipper('a')).not.toThrow();
    });
  });
});
