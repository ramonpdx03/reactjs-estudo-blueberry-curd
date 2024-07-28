import logo from "../assets/img/logo.png";

export default function Logo({ size = 56, withText = false }) {
  let imgLogo = <img src={logo} alt="Blueberry Curd" width={size} height={size} />

  if (withText) {
    return (
      <div className="flex justify-center items-center gap-2">
        {imgLogo}
        <h1><span className="text-indigo-400">Blueberry</span> Curd</h1>
      </div>
    );
  }

  return logo;
}