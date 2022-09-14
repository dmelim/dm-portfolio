type Props = {
  details: string;
};
const Badge = ({ details }: Props) => {
  return <div className={"badge btn-secondary m-1 "}>{details}</div>;
};

export default Badge;
