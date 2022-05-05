import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Button = ({ styles, children }) => {
  return (
    <div className="items-center ">
      <Link
        to="/auth"
        
        class={`capitalize  text-sm font-extrabold  hover:text-primary  px-10 py-3 rounded-md ${styles}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default Button;
