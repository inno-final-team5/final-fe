import tw from "tailwind-styled-components/";
import { FaStar } from "react-icons/fa";

const FavoriteCard = ({ imageUrl, title, id, deleteFavoriteMutation }) => {
  /** 즐겨찾기 삭제 함수 */
  const deleteMovie = (id) => {
    deleteFavoriteMutation.mutate({ id: id });
  };

  return (
    <FavoriteCardContainer>
      <FavoriteCardImage src={imageUrl} alt="포스터" />
      <FavoriteCardTitleBox>
        <FavoriteDeleteButton
          onClick={() => {
            deleteMovie(id);
          }}
        >
          <FaStar />
        </FavoriteDeleteButton>

        <FavoriteCardTitle>{title}</FavoriteCardTitle>
      </FavoriteCardTitleBox>
    </FavoriteCardContainer>
  );
};

const FavoriteCardContainer = tw.div`
m-4 border-none rounded-lg border-mYellow p-4 bg-mWhite shadow-lg  
`;

const FavoriteCardImage = tw.img`
  rounded justify-center flex
`;

const FavoriteCardTitleBox = tw.div`
  flex items-center mt-2 
`;

const FavoriteCardTitle = tw.span`
  text-mBlack ml-2  w-full text-xs
`;

const FavoriteDeleteButton = tw.button`
  text-mYellow
`;

export default FavoriteCard;
