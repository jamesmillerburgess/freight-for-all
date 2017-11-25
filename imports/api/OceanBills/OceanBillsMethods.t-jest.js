import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import * as methods from './OceanBillsMethods';

describe('OceanBillsMethods.js', () => {
  describe('create Function', () => {
    it('does not throw', () => {
      expect(() => methods.create({ document: {} })).not.toThrow();
    });
  });
});
