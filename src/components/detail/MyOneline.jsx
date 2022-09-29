import React from "react";

const MyOneline = () => {
  const [star, setClicked] = useState([false, false, false, false, false]);
  let value = oneLineReview.star;
  const array = [0, 1, 2, 3, 4];
  const handleStar = (value) => {
    setClicked(value);
  };
  return (
    <div>
      <section className="mt-6">
        <div className="container pt-2 pb-2 rounded-3xl bg-mGray mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center mr-4 mb-4 md:mb-0">
            <h1 className="p-2 md:text-xl font-medium title-font md:flex-row flex-col text-mYellow">내가쓴한줄평</h1>
          </div>
          <div className="flex md:w-1/2 2xl:w-full xl:w-full md:w-full space-x-2">
            <Stars className="mt-2 ml-3">
              {array.map((el, idx) => {
                return <FaStar key={idx} size="30" onClick={() => handleStarClick(el)} className={clicked[el] && "yellowStar"} />;
              })}
            </Stars>
            <div className="2xl:w-full md:w-full md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap text-base ">
              <textarea className="text-2xl w-full h-10 bg-gray-400 rounded-xl" />
            </div>
            <div className="flex-shrink-0 gap-4 inline-flex items-center focus:outline-none text-base xl:mr-6 md:mt-0">
              <button className="2xl:px-6 xl:px-6 lg:px-6 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream ">
                <TiPencil size="20" />
              </button>
              <button className="2xl:px-6 xl:px-6 lg:px-6 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream ">
                <BsTrash size="20" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyOneline;
