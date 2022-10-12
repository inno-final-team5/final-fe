import { FaCrown } from "react-icons/fa";
import DefaultBadge from "./DefaultBadge";

const MainBadge = ({ badgeIcon }) => {
  const resetBadge = () => {
    console.log("배지 초기화");
  };

  return (
    <div className="flex justify-center items-center border-gray-800 border p-2 rounded-lg flex-col ">
      <div className="relative w-24 h-24 bg-mWhite rounded-xl py-4 flex justify-center items-center mt-4">
        <div className=" absolute text-mYellow text-4xl -top-4 -left-4 -rotate-45">
          <FaCrown />
        </div>

        {badgeIcon === "" ? (
          <DefaultBadge />
        ) : (
          <span onClick={resetBadge}>{badgeIcon}</span>
        )}
      </div>
    </div>
  );
};

export default MainBadge;
