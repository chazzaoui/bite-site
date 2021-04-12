import styled from 'styled-components';

export const Up = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #5A61FF;
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
  position: fixed;
  right: 100px;
  bottom: 50px;
  z-index: 10;
  width: 40px;
  height: 40px;
  cursor: pointer;

  svg {
    stroke: #5A61FF;
    fill: #5A61FF;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
