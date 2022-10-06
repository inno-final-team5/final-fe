import { useMutation, useQuery, useQueryClient } from "react-query";
import { getMyBadges, updateMainBadge } from "apis/badgeApi";
import BadgeItem from "./BadgeItem";
import Spinner from "components/common/Spinner";
const BadgeList = () => {
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: badges,
  } = useQuery("badges", getMyBadges);

  const updateMainBadgeMutation = useMutation(updateMainBadge, {
    onSuccess: () => {
      queryClient.invalidateQueries("badges");
    },
  });

  let content = "";

  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = badges.map((badge) => {
      return (
        <BadgeItem
          key={badge.id}
          icon={badge.badgeIcon}
          name={badge.badgeName}
          description={badge.badgeInfo}
          isActive={badge.isActive}
          percent={badge.percent}
          updateMainBadgeMutation={updateMainBadgeMutation}
        />
      );
    });
  }

  return (
    <section className="text-gray-400 bg-mGray body-font">
      <div className="container p-8 mx-auto ">
        <div className=" grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4">
          {content}
        </div>
      </div>
    </section>
  );
};

export default BadgeList;
