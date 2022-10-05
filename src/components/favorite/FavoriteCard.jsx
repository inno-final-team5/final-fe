import tw from "tailwind-styled-components/";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FavoriteCard = ({
  imageUrl,
  id,
  title,
  movieId,
  deleteFavoriteMutation,
}) => {
  const navigate = useNavigate();

  /** 즐겨찾기 삭제 함수 */
  const deleteMovie = (id) => {
    deleteFavoriteMutation.mutate(id);
  };

  const goDetail = () => {
    navigate(`/detail/${movieId}/${title}${imageUrl}`);
  };
  return (
    <FavoriteCardContainer>
      <FavoriteCardImage
        src={`https://image.tmdb.org/t/p/w342${imageUrl}`}
        alt="포스터"
        onClick={() => goDetail(movieId)}
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
m-4 border-none rounded-lg border-mYellow p-4 bg-mWhite shadow-lg  
`;

const FavoriteCardImage = tw.img`
  rounded justify-center flex 
`;

const FavoriteCardTitleBox = tw.div`
  flex items-center pt-2 
`;

const FavoriteCardTitle = tw.span`
  text-mBlack ml-2  w-full text-xs font-bold md:text-sm 
`;

const FavoriteDeleteButton = tw.button`
  text-mBlack
`;

export default FavoriteCard;
