import Spinner from "components/common/Spinner";
import React from "react";
import BadgeList from "./BadgeList";
import MainBadge from "./MainBadge";
import useMyBadgeList from "./useMyBadgeList";

const MyChallengeSection = () => {
  const { isLoading, isError, error, data: badges } = useMyBadgeList();

  let content;

  if (isLoading) {
    content = <Spinner />;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else content = <BadgeList data={badges.data} />;
  return (
    <>
      <MainBadge />
      {content}
    </>
  );
};

export default MyChallengeSection;
