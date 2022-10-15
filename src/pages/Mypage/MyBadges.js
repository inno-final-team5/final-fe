import { getMyBadges, updateMyMainBadge } from "apis/badgeApi";
import { useMutation, useQuery } from "react-query";

import Spinner from "components/common/Spinner";
import MainBadge from "components/myBadges/MainBadge";
import BadgeList from "components/myBadges/BadgeList";

const MyBadges = () => {
  // const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: badges,
  } = useQuery("badges", getMyBadges);

  //대표배지 설정
  const updateMainBadgeMutation = useMutation(updateMyMainBadge, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries("badges");
      console.log(data);
    },
  });

  let content;

  if (isLoading) {
    content = <Spinner />;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else
    content = (
      <BadgeList
        data={badges.data}
        updateMainBadgeMutation={updateMainBadgeMutation}
      />
    );

  return (
    <div className="bg-mGray rounded-lg">
      <MainBadge />
      <div className="container p-8 mx-auto">{content}</div>
    </div>
  );
};

export default MyBadges;
