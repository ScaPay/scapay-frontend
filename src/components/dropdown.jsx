import { useState } from "react";

const DropDown = ({ value, options, onChange }) => {
      return (
        <div className="block">
            <select className="h-10 bg-white rounded-xl border-zinc-600 border-2 w-full" value={value} onChange={onChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
        </div>
      );
}

export default DropDown;