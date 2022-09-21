const FavoriteCard = ({ title, imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="포스터" width={100} height={80} />
      <p className="text-yellow-300">{title}</p>
    </div>
  );
};

export default FavoriteCard;
