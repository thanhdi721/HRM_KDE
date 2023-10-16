import React from "react";
import { WrapperInputStyle } from "./style";

const InputForm = (props) => {
  const {
    placeholder = "Nhập text",
    onChange,
    value = "",
    name, // Tên của trường input
    type = "text", // Kiểu của trường input (mặc định là text)
    id, // ID của trường input
    disabled = false, // Trạng thái disabled (mặc định là false)
    readOnly = false, // Trạng thái readOnly (mặc định là false)
    ...rests
  } = props;

  const handleOnchangeInput = (e) => {
    if (typeof onChange === "function") {
      props.onChange(e.target.value);
    }
  };

  return (
    <WrapperInputStyle
      placeholder={placeholder}
      value={value}
      name={name}
      type={type}
      id={id}
      disabled={disabled}
      readOnly={readOnly}
      {...rests}
      onChange={handleOnchangeInput}
    />
  );
};

export default InputForm;

