import tw from "tailwind-styled-components/";
import ActiveBadge from "./ActiveBadge";
import InActiveBadge from "./InActiveBadge";

const BadgeItem = ({
  id,
  icon,
  name,
  currentCount,
  maxCount,
  description,
  isActive,
}) => {
  return (
    <BadgeBox>
      {isActive === true ? (
        <ActiveBadge
          id={id}
          icon={icon}
          name={name}
          description={description}
        />
      ) : (
        <InActiveBadge
          id={id}
          icon={icon}
          name={name}
          description={description}
          currentCount={currentCount}
          maxCount={maxCount}
        />
      )}
      <BadgeTitle>{name}</BadgeTitle>
    </BadgeBox>
  );
};

const BadgeBox = tw.div`
  items-center justify-center flex flex-col
`;

const BadgeTitle = tw.span`
  text-mWhite pt-2 text-center
`;
export default BadgeItem;
