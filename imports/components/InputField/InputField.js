import React from 'react';

const InputField = props => (
  <input value={props.value} onChange={e => props.onChange(e.target.value)} />
);

export default InputField;
