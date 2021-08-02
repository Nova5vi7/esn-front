import { MenuWrapComponent } from './menu-styles';

const MenuWrapper = ({ children, ...rest }) => (
  <MenuWrapComponent {...rest}>{children}</MenuWrapComponent>
);

export default MenuWrapper;
