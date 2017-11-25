import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import StubCollections from 'meteor/hwillson:stub-collections';
import expect from 'expect.js';

import OceanBills from './OceanBills';
import * as methods from './OceanBillsMethods';

describe('OceanBillsMethods.js Meteor Tests', function() {
  beforeEach(() => {
    StubCollections.stub([OceanBills]);
  });
  afterEach(() => {
    OceanBills.remove({});
    StubCollections.restore();
  });
  describe('create Function', () => {
    it('inserts a document into the collection and inserts an Activity', () => {
      expect(OceanBills.find().count()).to.be(0);
      methods.create({ document: { name: 'a' } });
      expect(OceanBills.find().count()).to.be(1);
      expect(OceanBills.findOne().name).to.be('a');
    });
  });
});
