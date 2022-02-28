const List = ({ children, ...props }) => {
  return <ul {...props}>{children}</ul>;
};

export default List;
