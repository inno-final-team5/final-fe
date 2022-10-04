import { useNavigate } from "react-router-dom";

const WriteBox = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end mt-1 mb-4 mr-4">
      <button
        className="rounded-lg shadow-lg bg-mCream hover:bg-mYellow p-4 hover:font-bold"
        onClick={() => navigate("/community/edit")}
      >
        글쓰기
      </button>
    </div>
  );
};

export default WriteBox;
