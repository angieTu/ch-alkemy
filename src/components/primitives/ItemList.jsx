const ItemList = ({ children, ...props }) => {
  return <li {...props}>{children}</li>;
};

export default ItemList;
