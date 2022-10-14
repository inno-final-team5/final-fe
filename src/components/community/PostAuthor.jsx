import BadgeEmoji from "components/common/BadgeEmoji";
import React from "react";
import tw from "tailwind-styled-components";

const PostAuthor = ({ nickname, badgeId }) => {
  return (
    <DetailProfileContainer>
      <BadgeEmoji badgeId={badgeId} />
      <span> {nickname}</span>
    </DetailProfileContainer>
  );
};
const DetailProfileContainer = tw.div`
flex items-center justify-end p-2 text-sm text-mWhite
`;
export default PostAuthor;
