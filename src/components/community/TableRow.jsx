import React from "react";

const TableRow = ({ children }) => {
  return (
    <tr class="bg-mWhite hover:bg-mCream" className="table-row">
      {children}
    </tr>
  );
};

export default TableRow;

{
  /* <tr class="bg-mWhite hover:bg-mCream">
<th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
  영화
</th>
<td class="py-4 px-6">인생영화입니다</td>
<td class="py-4 px-6">김영화</td>
<td class="py-4 px-6">2022.11.11</td>
<td class="py-4 px-6 text-right">
  <a href="#" class="font-medium hover:underline">
    Edit
  </a>
</td>
</tr> */
}
