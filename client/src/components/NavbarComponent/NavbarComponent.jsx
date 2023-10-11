import { Checkbox, Rate } from "antd";
import React from "react";
import {
  WrapperContent,
  WrapperLableText,
  WrapperTextPrice,
  WrapperTextValue,
} from "./style";

const NavbarComponent = () => {
  const onChange = () => {};

  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option, index) => (
          <WrapperTextValue key={index}>{option}</WrapperTextValue>
        ));
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option, index) => (
              <Checkbox
                key={index}
                style={{ marginLeft: 0 }}
                value={option.value}
              >
                {option.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option, index) => (
          <div key={index} style={{ display: "flex" }}>
            <Rate style={{ fontSize: "12px" }} disabled defaultValue={option} />
            <span> {`tu ${option}  sao`}</span>
          </div>
        ));
      case "price":
        return options.map((option, index) => (
          <WrapperTextPrice key={index}>{option}</WrapperTextPrice>
        ));
      default:
        return null;
    }
  };

  return (
    <div>
      <WrapperLableText>Lable</WrapperLableText>
      <WrapperContent>
        {renderContent("text", ["Tu lanh", "TV", "MAYGIAT"])}
      </WrapperContent>
      {/* <WrapperContent>
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
        ])}
      </WrapperContent>
      <WrapperContent>{renderContent("star", [1, 2, 3, 4, 5])}</WrapperContent>
      <WrapperContent>
        {renderContent("price", ["Dưới 40", "Trên 100", "dưới 1000"])}
      </WrapperContent> */}
    </div>
  );
};

export default NavbarComponent;
