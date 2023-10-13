import { Row } from "antd";
import styled from "styled-components";

export const WrapperBody = styled.div`
  width: 100%;
  background-color: #efefef;
`;

export const WrapperContainer = styled.div`
  height: 1000px;
  width: 50%;
  padding-top: 20px;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const WrapperContainerTitle = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
`;
export const WrapperContainerText = styled(Row)`
  padding: 10px;
  font-size: 13px;
  font-weight: 400;
`;
