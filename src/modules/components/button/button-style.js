import styled, { css } from 'styled-components';

const defaultStyle = css`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.tint};

  &:hover {
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08),
      0px 24px 48px rgba(44, 39, 56, 0.16);
  }

  &:active {
    border: 2px solid rgba(44, 39, 56, 0.86);
  }
`;

const secondaryStyle = css`
  background: transparent;
  color: ${({ theme }) => theme.colors.main};
  border: 2px solid ${({ theme }) => theme.colors.main};

  &:hover {
    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const dangerStyle = css`
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.hover.error};
  }
`;

const successStyle = css`
  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
`;

const disabledStyle = css`
  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.6;
  pointer-events: none;
`;

const initialStyle = css`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
`;

const getBackground = buttonType => {
  switch (buttonType) {
    case 'default':
      return defaultStyle;
    case 'secondary':
      return secondaryStyle;
    case 'danger':
      return dangerStyle;
    case 'success':
      return successStyle;
    case 'disabled':
      return disabledStyle;
    default:
      return initialStyle;
  }
};

const ButtonStyle = css`
  width: 100%;
  height: 56px;
  border: none;
  padding: 0 20px;
  box-shadow: ${({ theme }) => theme.typo.boxShadow};
  border-radius: 6px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.typo.fonts.default};
  font-weight: ${({ theme }) => theme.typo.weights.medium};
  // font-size: 16px;
  // line-height: 1.25;
  font-size: ${({ theme: { ms } }) => ms(2)};
  line-height: ${({ theme: { ms } }) => ms(2)};
  cursor: pointer;
  transition: all 0.3s ease;
  ${({ btnType }) => getBackground(btnType)};

  &:disabled {
    background: ${({ theme }) => theme.colors.shade};
    color: ${({ theme }) => theme.colors.shade};
    pointer-events: none;
  }

  i {
    margin-left: ${({ theme: { ms } }) => ms(-2)};
  }
`;

export const Button = styled.button`
  ${ButtonStyle}
`;

export const ButtonLink = styled.a`
  text-decoration: none;
  ${ButtonStyle}
`;
