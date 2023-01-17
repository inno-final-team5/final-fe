import React from "react";
import tw from "tailwind-styled-components";

const CommunityContainer = ({ children }) => {
  return (
    <>
      <Base>{children}</Base>
    </>
  );
};

const Base = tw.div`
    bg-mGray p-2 rounded-xl 
`;

export default CommunityContainer;
