import tw from "tailwind-styled-components/";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FavoriteCard = ({
  imageUrl,
  title,
  id,
  movieId,
  deleteFavoriteMutation,
}) => {
  /** 즐겨찾기 삭제 함수 */
  const deleteMovie = (id) => {
    deleteFavoriteMutation.mutate({ id: id });
  };
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/detail/${movieId}`);
  };
  return (
    <FavoriteCardContainer>
      <FavoriteCardImage
        src={imageUrl}
        alt="포스터"
        onClick={() => goDetail(id)}
      />
      <FavoriteCardTitleBox>
        <FavoriteCardTitle>{title}</FavoriteCardTitle>
        <FavoriteDeleteButton
          onClick={() => {
            deleteMovie(id);
          }}
        >
          <FaTrash />
        </FavoriteDeleteButton>
      </FavoriteCardTitleBox>
    </FavoriteCardContainer>
  );
};

const FavoriteCardContainer = tw.div`
m-4 border-none rounded-lg border-mYellow p-4 bg-mWhite shadow-lg  cursor-pointer
`;

const FavoriteCardImage = tw.img`
  rounded justify-center flex
`;

const FavoriteCardTitleBox = tw.div`
  flex items-center mt-2 
`;

const FavoriteCardTitle = tw.span`
  text-mBlack ml-2  w-full text-xs font-bold md:text-sm 
`;

const FavoriteDeleteButton = tw.button`
  text-mBlack
`;

export default FavoriteCard;
