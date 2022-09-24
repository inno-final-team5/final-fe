import tw from "tailwind-styled-components";
import Layout from "components/common/Layout";
import MyContainer from "components/mypage/MyContainer";
import SideBar from "components/mypage/Sidebar";
import Swal from "sweetalert2";

const MyPage = () => {
  // TODO 서버와 통신 기능 구현하기!
  /**계정 삭제  */
  const deleteAccount = () => {
    Swal.fire({
      title: "계정 삭제",
      text: "계정을 삭제하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "삭제가 완료되었습니다",
          "이용해주셔서 감사합니다",
          "success"
        );
      }
    });
  };

  return (
    <Layout>
      <>
        <section>
          <MyPageContainer>
            <MyPageSidebarContainer>
              <SideBar deleteAccount={deleteAccount} />
            </MyPageSidebarContainer>
            <MyPageContentContainer>
              <MyContainer />
            </MyPageContentContainer>
          </MyPageContainer>
        </section>
      </>
    </Layout>
  );
};

const MyPageContainer = tw.div`
mt-4
`;
const MyPageSidebarContainer = tw.div`
bg-mBlack fixed w-56
`;

const MyPageContentContainer = tw.div`
bg-mBlack rounded-sm pl-64
`;

export default MyPage;
