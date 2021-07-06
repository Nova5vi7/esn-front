const MenuItem = ({ children, ...rest }) => (
  <div className="menu__item" {...rest}>
    {children}
  </div>
);

export default MenuItem;
