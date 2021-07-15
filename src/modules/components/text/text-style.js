import styled, { css } from 'styled-components';

const defaultStyle = css`
  font-family: ${({ theme }) => theme.typo.fonts.default};
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.ms(13)};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 28px;
  line-height: ${({ theme }) => theme.ms(13)};
  margin: ${({ theme }) => theme.ms(2)} 0;

  ${defaultStyle}
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: ${({ theme }) => theme.ms(9)};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 28px;
  line-height: ${({ theme }) => theme.ms(9)};
  margin: ${({ theme }) => theme.ms(2)} 0;

  ${defaultStyle}
`;

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.ms(5)};
  ${defaultStyle}
`;

export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.ms(3)};
  ${defaultStyle}
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.ms(2.5)};
  line-height: 1.5;
  margin: 0;
  display: ${properties => properties.display};
  color: ${({ theme }) => theme.colors.primary};
  ${defaultStyle}
`;

export const Link = styled.a` 
  background-color: inherit;
  border: none;
  padding: 0;
  margin-left: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.ms(2.5)};
  line-height: 1.37;
  ${defaultStyle}
`;
