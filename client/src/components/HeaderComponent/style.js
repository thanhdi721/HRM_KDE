import { Row } from "antd";

import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  background-color: var(--primary-color);
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
  width: 100%;
  padding: 10px 0;
`;
export const WrapperIconHeader = styled.div`
  position: absolute;
  right: 50px;
  top: -10px;
  text-align: center;
`;
