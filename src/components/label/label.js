import React from 'react';

const Label = (props) => {
  return <div className={`label label--${props.themeColor}`}>{props.children}</div>;
};

export default Label;
