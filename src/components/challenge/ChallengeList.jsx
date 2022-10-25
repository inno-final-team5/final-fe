import tw from "tailwind-styled-components";
import ChallengeItem from "./ChallengeItem";
import Spinner from "components/common/Spinner";
import useChallengeList from "./useChallengeList";

const ChallengeList = () => {
  const { isLoading, isError, error, data: challenges } = useChallengeList();

  let content;

  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = challenges.data.map((challenge) => {
      return (
        <ChallengeItem
          key={challenge.badgeId}
          id={challenge.badgeId}
          icon={challenge.badgeIcon}
          name={challenge.badgeName}
          badgeInfo={challenge.badgeInfo}
          badgeTotal={challenge.badgeTotal}
          memberTotal={challenge.memberTotal}
        />
      );
    });
  }
  return <ChallengeListContainer>{content}</ChallengeListContainer>;
};

const ChallengeListContainer = tw.div`
  grid grid-cols-2  h-auto bg-mGray p-4 lg:p-8 rounded-md  min-w-max mx-4 md:grid-cols-4  w-full md:w-5/6 mt-4  shadow-lg lg:mb-6 
`;

export default ChallengeList;
