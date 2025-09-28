import React from "react";

const InputField = ({ label, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="mb-3">
      <label className="block text-gray-200 text-sm mb-1">{label}</label>
      <input
  type={type}
  placeholder={placeholder}
  value={value}
  onChange={onChange}
  className="w-full px-4 py-2 border rounded-lg 
             bg-white text-black placeholder-gray-500 
             focus:outline-none focus:ring-2 focus:ring-green-400"
/>

    </div>
  );
};

export default InputField;
