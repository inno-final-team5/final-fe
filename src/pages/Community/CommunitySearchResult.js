import CommunityContainer from "components/community/CommunityContainer";
import { useParams } from "react-router-dom";
import SearchList from "components/community/SearchList";

const CommunitySearchResult = () => {
  const params = useParams();
  const type = params.type;
  const keyword = params.keyword;

  return (
    <CommunityContainer>
      <SearchList type={type} keyword={keyword} />
    </CommunityContainer>
  );
};
export default CommunitySearchResult;
