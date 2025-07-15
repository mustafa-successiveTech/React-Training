"use client";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TablePagination,
  TableSortLabel,
  Paper,
} from "@mui/material";
import { useState } from "react";

const sampleData = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 28 },
  { name: "Eva", age: 27 },
];

export default function MuiDataTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = () => {
    setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
  };

  const handleChangePage = (_, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const sortedData = [...sampleData].sort((a, b) => {
    return sortOrder === "asc"
      ? a.age - b.age
      : b.age - a.age;
  });

  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper sx={{ maxWidth: 600, margin: "auto", mt: 5 }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell sortDirection={sortOrder}>
                <TableSortLabel
                  active
                  direction={sortOrder}
                  onClick={handleSort}
                >
                  Age
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={sampleData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[2, 3, 5]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
