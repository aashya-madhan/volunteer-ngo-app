import React from "react";

function InputField({ label, name, type = "text", placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="block text-black mb-1">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

export default InputField;
