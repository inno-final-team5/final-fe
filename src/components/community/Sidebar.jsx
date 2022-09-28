import React from "react";

const Sidebar = () => {
  return (
    <div>
      <aside class="w-64 m-8" aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3 bg-mGray rounded">
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-mYellow rounded-lg hover:bg-mYellow hover:text-mBlack"
              >
                <span class="ml-3">전체 조회</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-mYellow rounded-lg hover:bg-mYellow hover:text-mBlack"
              >
                <span class="ml-3">영화 후기</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-mYellow rounded-lg hover:bg-mYellow hover:text-mBlack"
              >
                <span class="ml-3">영화관 후기</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
