import logo from "../assets/img/logo.png";

export default function Logo({ size = 56 }) {
  return (
    <img src={logo} alt="Blueberry Curd" width={size} height={size} />
  );
}