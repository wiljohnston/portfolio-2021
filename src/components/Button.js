import React from "react";
import { PropTypes } from "prop-types";

const Button = ({ children, className, color, onClick, transparent, ...props }) => {
  return (
    <button
      {...props}
      type="button"
      className={`transition-transform button button--${color} ${
        transparent ? `button--transparent` : ``
      } ${className} relative block`}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

Button.defaultProps = {
  className: ``,
  color: `off-white`,
  onClick: () => {},
  transparent: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  transparent: PropTypes.bool,
};

export default Button;
