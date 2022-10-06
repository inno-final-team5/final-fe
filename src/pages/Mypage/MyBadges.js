import BadgeList from "components/myBadges/BadgeList";
import BadgeListT from "components/myBadges/BadgeListT";
import MainBadge from "components/myBadges/MainBadge";
import React, { Fragment } from "react";

const MyBadges = () => {
  const mainBadge = "https://cdn-icons-png.flaticon.com/512/8060/8060794.png";

  return (
    <Fragment>
      <section>
        <div className="bg-mGray">
          {/* 메인 뱃지 공간 */}
          <MainBadge badgeImage={mainBadge} />
          {/* 뱃지 리스트 */}
          <BadgeListT />
        </div>
      </section>
    </Fragment>
  );
};

export default MyBadges;
