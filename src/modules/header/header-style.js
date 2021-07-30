import styled, { css } from 'styled-components';

const headerStyle = css`
  padding: 15px 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const initialStyle = css`
  justify-content: flex-start;
`;

const rightContent = css`
  justify-content: flex-end;
`;

const getJustifyContent = contentType => {
  switch (contentType) {
    case 'right':
      return rightContent;
    default:
      return initialStyle;
  }
};

export const ToggleWrap = styled.div`
  position: relative;
  height: 50%;
  width: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;

  div {
    pointer-events: none;
  }
`;

export const WrapContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  ${({ contentType }) => getJustifyContent(contentType)};
`;

export const Header = styled.div`
  ${headerStyle}
`;
