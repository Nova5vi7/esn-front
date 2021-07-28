import styled from 'styled-components';

export const MenuWrapComponent = styled.div`
  display: flex;
  margin-left: 30px;
`;

export const MenuItemComponent = styled.div`
  margin-right: 40px;
  font-family: ${({ theme }) => theme.typo.fonts.default};
  color: ${({ theme }) => theme.colors.bright};
  line-height: 1.37;

  a {
    margin: 0;
    color: ${({ theme }) => theme.colors.bright};
    font-size: ${({ theme: { ms } }) => ms(2)};
    transition: all 0.3s ease;

    &:hover {
      color:  ${({ theme }) => theme.colors.gray};
    }
  }

  &:last-child {
    margin: 0;
  }
`;
