import { Link } from "react-router-dom";
import Logo from "images/Logo.png";

const Footer = () => {
  return (
    <footer class="text-gray-600 body-font ">
      <div class="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col ">
        <Link to="/">
          <img src={Logo} alt="logo" width={80} height={80} />
        </Link>

        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 방구석평론가
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"></span>
      </div>
    </footer>
  );
};

export default Footer;
