import React from 'react';

const TextareaField = props => (
  <textarea
    value={props.value}
    onChange={e => props.onChange(e.target.value)}
  />
);

export default TextareaField;
