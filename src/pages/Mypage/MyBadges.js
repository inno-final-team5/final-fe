import { getMyBadges, updateMainBadge } from "apis/badgeApi";
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

  //배지 초기화
  const resetMainBadgeMutation = useMutation(updateMainBadge, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries("badges");
      console.log(data);
    },
  });

  //대표배지 설정
  const updateMainBadgeMutation = useMutation(updateMainBadge, {
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
      <MainBadge badgeId={0} updateMainBadgeMutation={resetMainBadgeMutation} />
      <div className="container p-8 mx-auto">{content}</div>
    </div>
  );
};

export default MyBadges;
