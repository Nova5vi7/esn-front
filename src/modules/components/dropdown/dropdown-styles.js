import styled from 'styled-components';

export const Dropdown = styled.div`
  max-width: 190px;
  width: 100%;
  padding: 6px 0;
  position: absolute;
  bottom: -65px;
  right: -14px;
  background: #fefefe;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    right: 30px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 10px 6px;
    border-color: transparent transparent #fefefe transparent;
  }
`;

export const DropdownItem = styled.div`
  padding: 0 8px;
  width: 100%;
  height: 24px;
  font-family: ${({ theme }) => theme.typo.fonts.default};
  font-size: 13px;
  line-height: 1.69;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(124, 156, 191, 0.12);
  }
`;
