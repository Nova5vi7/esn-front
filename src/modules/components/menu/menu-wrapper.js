import { MenuWrapComponent } from './style-component';

const MenuWrapper = ({ children, ...rest }) => (
  <MenuWrapComponent {...rest}>{children}</MenuWrapComponent>
);

export default MenuWrapper;
