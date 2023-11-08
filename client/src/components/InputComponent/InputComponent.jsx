import React from "react";
import { Input } from "antd";

const InputComponent = ({
  name,
  value,
  onChange,
  size,
  placeholder,
  bordered,
  style,
  ...rests
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange({
        target: {
          name: name,
          value: e.target.value,
        },
      });
    }
  };

  return (
    <Input
      name={name}
      value={value}
      onChange={handleChange}
      size={size}
      placeholder={placeholder}
      bordered={bordered}
      style={style}
      {...rests}
    />
  );
};

export default InputComponent;
