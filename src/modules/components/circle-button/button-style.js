import styled, { css } from 'styled-components';

const ButtonStyle = css`
  width: 49px;
    height: 49px;
    background: ${({ theme }) => theme.colors.accent};
    border: 2px solid #ffffff;
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;

    i {
      font-size: 15px;
    }
`;

export const Button = styled.button`
  ${ButtonStyle}
`;