import Navbar from "./Navbar";
type Props = {
  children?: JSX.Element;
};
const LayoutMain = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default LayoutMain;
