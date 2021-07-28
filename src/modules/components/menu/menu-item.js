import { MenuItemComponent } from './style-component';

const MenuItem = ({ children, ...rest }) => (
  <MenuItemComponent {...rest}>{children}</MenuItemComponent>
);

export default MenuItem;
