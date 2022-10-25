import React from "react";
import BadgeEmoji from "components/common/BadgeEmoji";
import { timeForToday } from "utils/utils";
const CommentItemHeader = ({ badgeId, nickname, createdAt }) => {
  return (
    <div className="flex justify-between mb-2">
      <div className="flex">
        <BadgeEmoji badgeId={badgeId} />
        <span>{nickname}</span>
      </div>
      <span>{timeForToday(createdAt)}</span>
    </div>
  );
};

export default CommentItemHeader;
