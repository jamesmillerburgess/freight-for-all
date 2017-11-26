import OceanBillDocument from './OceanBillDocument';

describe('OceanBillDocument.js', () => [
  describe('OceanBillDocument Function', () => {
    it('does not throw with or without a shipment', () => {
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
      expect(OceanBillDocument).not.toThrow();
      expect(() => OceanBillDocument({})).not.toThrow();
    });
  }),
]);
