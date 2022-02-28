const Heading = ({ level = 1, children, ...props }) => {
  const Title = `h${level}`;
  return <Title {...props}>{children}</Title>;
};

export default Heading;
