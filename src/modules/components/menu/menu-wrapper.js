const MenuWrapper = ({ children, ...rest }) => (
  <div className="menu__wrapper" {...rest}>
    {children}
  </div>
);

export default MenuWrapper;
