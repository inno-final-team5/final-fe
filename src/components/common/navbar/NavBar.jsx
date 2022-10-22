import { navigationLinks } from "./MyLinks";
import NavMainMenu from "./NavMainMenu";

const NavBar = ({ accessToken }) => {
  return (
    <nav className="md:ml-auto md:mr-auto flex text-base w-full ">
      <div className="flex justify-start pl-8 ">
        <ul className="flex gap-12">
          {navigationLinks.map((link) => (
            <div className="text-left md:cursor-pointer" key={link.name}>
              <NavMainMenu link={link.link} name={link.name} />
            </div>
          ))}
          {accessToken != null ? (
            <NavMainMenu link={"/mypage/favorites"} name={"마이페이지"} />
          ) : (
            <></>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
