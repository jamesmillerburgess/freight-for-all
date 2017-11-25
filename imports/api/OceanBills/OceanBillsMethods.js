import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import OceanBills from './OceanBills';

export const create = params => {
  check(params, {
    document: Object,
  });
  return OceanBills.insert(params.document);
};

Meteor.methods({ 'oceanBill.create': create });
