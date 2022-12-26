import React from "react";
import Table from "../../../components/layouts/table/Table";
import makeData from "./DataAbsen";
import TableStyles from "./AbsenList.style";
function ShowAbsen() {
  const columns = [
    {
      Header: "Nama",
      accessor: "nama",
    },
    {
      Header: "NIM",
      accessor: "nim",
    },
    {
      Header: "Jurusan",
      accessor: "jurusan",
    },
    {
      Header: "Tanggal Hadir",
      accessor: "tanggalHadir",
    },
  ];

  const data = React.useMemo(() => makeData(100), []);
  return (
    <TableStyles>
      <Table columns={columns} data={data} />
    </TableStyles>
  );
}

export default ShowAbsen;
