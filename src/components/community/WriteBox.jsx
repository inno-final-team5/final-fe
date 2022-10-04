import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
    <div className="flex justify-end mt-1 mb-4 mr-4">
      <button
        className="rounded-lg shadow-lg bg-mCream hover:bg-mYellow p-4 hover:font-bold"
        onClick={goEdit}
      >
        글쓰기
      </button>
    </div>
  );
};

export default WriteBox;
