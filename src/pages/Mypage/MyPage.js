import tw from "tailwind-styled-components";
import Layout from "components/common/Layout";
import MyContainer from "components/mypage/MyContainer";
import SideBar from "components/mypage/Sidebar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  // TODO 서버와 통신 기능 구현하기!
  /**계정 삭제  */
  const deleteAccount = () => {
    Swal.fire({
      title: "회원 탈퇴",
      text: "정말 탈퇴하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteConfirm();
      }
    });
  };

  const deleteConfirm = () => {
    Swal.fire({
      title: "탈퇴 완료",
      text: "이용해주셔서 감사합니다",
      icon: "success",
      confirmButtonText: "완료",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

  return (
    <Layout>
      <MyPageContainer>
        <MyPageSidebarContainer>
          <SideBar />
        </MyPageSidebarContainer>
        <MyPageContentContainer>
          <MyContainer />
        </MyPageContentContainer>
      </MyPageContainer>
    </Layout>
  );
};

const MyPageContainer = tw.div`
mt-4 h-full
`;
const MyPageSidebarContainer = tw.div`
bg-mBlack md:block hidden md:fixed
`;

const MyPageContentContainer = tw.div`
bg-mBlack rounded-xl md:pl-56 h-full
`;

export default MyPage;
