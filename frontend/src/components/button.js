import React from 'react';

import "../scss/main.scss"

const Button = ({ buttonText }) => {
  return <button className="button">{buttonText}</button>;
};

export default Button;