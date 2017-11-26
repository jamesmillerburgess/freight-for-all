import * as AT from './actionTypes';

export const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });
  return action;
};

export const setOceanBillProp = makeActionCreator(
  AT.SET_OCEAN_BILL_EDITOR_PROP,
  'prop',
  'value'
);
