import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  icon: Icon,
  required = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Icon size={16} className="text-gray-400" />
          </div>
        )}
        <input
          type={inputType}
          name={name}
          className={`
            w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
            disabled:bg-gray-50 disabled:text-gray-500
            ${Icon ? "pl-10" : ""}
            ${error ? "border-red-500 focus:ring-red-500" : ""}
          `}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff size={16} className="text-gray-400 hover:text-gray-600" />
            ) : (
              <Eye size={16} className="text-gray-400 hover:text-gray-600" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};
