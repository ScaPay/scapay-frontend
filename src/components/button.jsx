import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import propTypes from 'prop-types';

const Button = ({ styles, children, to }) => {
  return (
    <div className="items-center">
      <Link
        to={to}
        
        class={`capitalize  text-sm font-extrabold  hover:text-primary  px-10 py-3 rounded-md ${styles}`}
      >
        {children}
      </Link>
    </div>
  );
};

Button.defaultProps = {
  to: "/auth",
}

Button.propTypes = {
  to: propTypes.string,
}


export default Button;
