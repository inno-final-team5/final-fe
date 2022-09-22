import React from "react";

export const Table = (props) => {
  const { children } = props;
  return (
    <>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-mBlack ">
          <thead class=" text-mYellow text-base bg-mBlack">
            <tr>
              <th scope="col" class="py-3 px-6">
                구분
              </th>
              <th scope="col" class="py-3 px-6">
                제목
              </th>
              <th scope="col" class="py-3 px-6">
                작성자
              </th>
              <th scope="col" class="py-3 px-6">
                작성일
              </th>
              <th scope="col" class="py-3 px-6">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
