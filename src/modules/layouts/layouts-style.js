import styled, { css } from 'styled-components';

const authWrapStyle = css`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`;

const defaultStyleBlock = css`
  width: 50%;
  display: flex;
`;

const blockLeftStyle = css`
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 140px;

  ${defaultStyleBlock}
`;

const blockRightStyle = css`
  align-items: center;

  ${defaultStyleBlock}
`;

const textStyle = css`
  font-family: ${({ theme }) => theme.typo.fonts.default};
  font-weight: ${({ theme }) => theme.typo.weights.medium};
  font-size: ${({ theme }) => theme.ms(15.2)};
  line-height: 1.29;
  text-align: center;
  text-transform: uppercase;
`;

const contentWrapStyle = css`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.tint};
`;

const logoWrapStyle = css`
  text-align: center;
`;

export const ContentWrap = styled.div`
  ${contentWrapStyle}
`;

export const AuthWrap = styled.div`
  ${authWrapStyle}
`;

export const BlockLeft = styled.div`
  ${blockLeftStyle}
`;

export const Text = styled.div`
  ${textStyle}
`;

export const LogoWrap = styled.div`
  ${logoWrapStyle}
`;

export const BlockRight = styled.div`
  ${blockRightStyle}
`;
