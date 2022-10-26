import Spinner from "components/common/Spinner";
import React from "react";
import BadgeList from "./BadgeList";
import MainBadge from "./MainBadge";
import { getMyBadges } from "apis/badgeApi";
import { useQuery } from "react-query";

const MyChallengeSection = () => {
  const {
    isLoading,
    isError,
    error,
    data: badges,
  } = useQuery("badgeList", getMyBadges, { keepPreviousData: true });

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
