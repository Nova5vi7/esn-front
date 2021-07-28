import styled, { css } from 'styled-components';

const smallSize = css`
   max-width: 50px;
   height: 50px;
`
const initialStyle = css`
  max-width: 233px;
  height: 233px;
`

const getSize = (type) => {
  switch (type) {
    case 'small':
      return smallSize;
    default:
      return initialStyle;
  }
}

export const UserAvatarWrap = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  ${({ type }) => getSize(type)};
`;
