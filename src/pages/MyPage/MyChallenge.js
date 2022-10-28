import Spinner from "components/common/Spinner";
import MainBadge from "components/myChallenges/MainBadge";
import BadgeList from "components/myChallenges/BadgeList";
import { getMyBadges } from "apis/badgeApi";
import { useQuery } from "react-query";

const MyChallenge = () => {
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

export default MyChallenge;
