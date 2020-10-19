import React from 'react';

const FancyButton = (props) => (
  <button className={`fancyButton fancyButton--${props.themeColor}`}>{props.children}</button>
);

export default FancyButton;
