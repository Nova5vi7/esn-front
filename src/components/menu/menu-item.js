import { MenuItemComponent } from './menu-styles';

const MenuItem = ({ children, ...rest }) => (
  <MenuItemComponent {...rest}>{children}</MenuItemComponent>
);

export default MenuItem;
