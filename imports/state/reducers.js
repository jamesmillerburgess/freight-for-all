import { combineReducers } from 'redux';
import _ from 'lodash/fp';

import * as AT from './actionTypes';

export const oceanBillEditor = (state = {}, action = { type: '' }) => {
  switch (action.type) {
    case AT.SET_OCEAN_BILL_EDITOR_PROP:
      return _.set(action.prop, action.value, state);
    default:
      return state;
  }
};

const reducers = combineReducers({ oceanBillEditor });

export default reducers;
