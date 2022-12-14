import Logo from "../../images/Logo2.png";
import { Link } from "react-router-dom";

const LogoBox = () => {
  return (
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        className="md:cursor-pointer w-32 h-16 lg:w-56 lg:h-28"
      />
    </Link>
  );
};

export default LogoBox;
