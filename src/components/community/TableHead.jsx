const TableHead = () => {
  return (
    <thead className="font-bold text-sm md:text-lg border-solid border-b-2 border-mGray">
      <tr>
        <th scope="col" className="py-3 px-6 w-[100px]">
          구분
        </th>
        <th scope="col" className="py-3 px-6">
          제목
        </th>
        <th scope="col" className="py-3 px-6 w-[120px]">
          작성자
        </th>
        <th scope="col" className="py-3 px-6 w-[140px]">
          작성일
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
