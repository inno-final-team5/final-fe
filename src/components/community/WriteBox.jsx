import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdEdit } from "react-icons/md";

const WriteBox = () => {
  const navigate = useNavigate();

  const goEdit = () => {
    if (localStorage.getItem("accessToken") != null) {
      navigate("/community/edit");
    } else {
      Swal.fire("로그인이 필요합니다!");
    }
  };

  return (
    <button
      className="rounded-lg shadow-lg bg-mCream hover:bg-mYellow p-2 hover:font-bold m-4 px-4 flex text-md"
      onClick={goEdit}
    >
      <MdEdit className="mr-1" />
      쓰기
    </button>
  );
};

export default WriteBox;
