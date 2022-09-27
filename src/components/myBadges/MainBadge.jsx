import { FaCrown } from "react-icons/fa";

const MainBadge = ({ badgeImage }) => {
  return (
    <div className="flex justify-center items-center border-gray-800 border p-2 rounded-lg flex-col ">
      <div className="relative w-24 h-24 bg-mWhite rounded-xl py-4 flex justify-center items-center mt-4">
        <div className=" absolute text-mYellow text-4xl -top-4 -left-4 -rotate-45">
          <FaCrown />
        </div>

        {badgeImage === "" ? (
          <div></div>
        ) : (
          <img
            alt="mainBadge"
            className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-sm"
            src={badgeImage}
          />
        )}
      </div>
    </div>
  );
};

export default MainBadge;
