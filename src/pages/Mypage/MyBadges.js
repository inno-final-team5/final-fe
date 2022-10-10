import BadgeList from "components/myBadges/BadgeList";
import BadgeListT from "components/myBadges/BadgeListT";
import MainBadge from "components/myBadges/MainBadge";
import React, { Fragment } from "react";

const MyBadges = () => {
  return (
    <Fragment>
      <section>
        <div className="bg-mGray">
          {/* 메인 뱃지 공간 */}
          <MainBadge badgeIcon="" />
          {/* 뱃지 리스트 */}
          <BadgeListT />
        </div>
      </section>
    </Fragment>
  );
};

export default MyBadges;
