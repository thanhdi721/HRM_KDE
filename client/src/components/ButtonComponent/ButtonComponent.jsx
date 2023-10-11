import { Button } from "antd";
import React from "react";

const ButtonComponent = ({
  size,
  styleButton,
  styleTextButton,
  textbutton,
  disabled,
  ...rests
}) => {
  const buttonBackground = disabled
    ? "#ccc"
    : styleButton && styleButton.background;

  return (
    <Button
      style={{
        ...styleButton,
        background: buttonBackground,
      }}
      size={size}
      {...rests}
    >
      <span style={styleTextButton}>{textbutton}</span>
    </Button>
  );
};

export default ButtonComponent;
