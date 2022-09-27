import tw from "tailwind-styled-components";
import ChallengeItem from "components/challenge/ChallengeItem";
import { useQuery } from "react-query";
import { getChallenges } from "apis/challengeApi";

const ChallengeList = () => {
  const {
    isLoading,
    isError,
    error,
    data: challenges,
  } = useQuery("challenges", getChallenges);

  let content;

  if (isLoading) {
    content = <p>Loading</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = challenges.map((challenge) => {
      return (
        <ChallengeItem
          key={challenge.badgeId}
          icon={challenge.badgeIcon}
          name={challenge.badgeName}
          description={challenge.badgeInfo}
        />
      );
    });
  }
  return <ChallengeListBox>{content}</ChallengeListBox>;
};

const ChallengeListBox = tw.div`
  grid grid-cols-1  h-auto bg-mGray p-4 lg:p-8 rounded-md  min-w-max mx-4 md:grid-cols-2 w-full  shadow-lg lg:mb-6
`;

export default ChallengeList;
