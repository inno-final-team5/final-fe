import React from "react";

const Empty = ({ title, detail }) => {
  return (
    <section>
      <div className="flex justify-center items-center text-4xl h-screen bg-mGray rounded-lg text-mWhite flex-col gap-12">
        <p className="flex ">{title}</p>
        <p>{detail}</p>
      </div>
    </section>
  );
};

export default Empty;
