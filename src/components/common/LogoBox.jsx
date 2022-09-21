import Logo from "../../images/Logo2.png";
import { Link } from "react-router-dom";

const LogoBox = () => {
  return (
    <Link to="/">
      <img src={Logo} alt="logo" className="w-40" />
    </Link>
  );
};

export default LogoBox;
