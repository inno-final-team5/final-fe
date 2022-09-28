import React from "react";

const TableColum = ({ children }) => {
  return (
    <td class="py-4 px-6" className="table-column">
      {children}
    </td>
  );
};

export default TableColum;

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
