import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };
  return (
    <section className="h-screen">
      <div className="h-full flex items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-mYellow dark:text-primary-500">404</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-mCream md:text-4xl dark:text-white">Something's missing.</p>
          <p className="mb-4 text-lg font-light text-mWhite dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the home page.
          </p>
          <button
            type="button"
            onClick={goMain}
            className="inline-flex text-mWhite bg-mGray hover:bg-mYellow hover:text-mBlack focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
