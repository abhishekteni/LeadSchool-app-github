import {
  TableBody,
  TableCell,
  Table,
  TableHead,
  TableRow,
  makeStyles,
  Button,
} from "@material-ui/core";

// import Pagination from "@material-ui/lab/Pagination";
import XLSX from "xlsx";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getusers, deleteUser } from "../../Services/api";
import "./ViewStudent.css";
import { Link } from "react-router-dom";
const useStyle = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      background: "rgba(17, 27, 75, 0.8)",

      color: "white",
      fontSize: "15px",
    },
  },
});
const ViewStudent = () => {
  const [student, setStudent] = useState([]);
  const classes = useStyle();
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getusers();
    console.log("hello");
    console.log(response);
    setStudent(response.data);
  };
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  const downloadExcel = () => {
    const workSheet = XLSX.utils.json_to_sheet(student);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "students");
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workBook, "studentsData.xlsx");
  };
  return (
    <div className="userList">
      <Table
        className={classes.table}
        actions={[
          {
            icon: () => <button>Export</button>,
            tooltip: "Export to Excel",
            onClick: () => alert("click"),
            isFreeAction: true,
          },
        ]}
      >
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>school</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>division</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>{}</TableCell>
            <TableCell>{}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {student.map((user) => (
            <TableRow>
              <TableCell>{user.id} </TableCell>
              <TableCell>{user.name} </TableCell>
              <TableCell>{user.school} </TableCell>
              <TableCell>{user.email} </TableCell>
              <TableCell>{user.date} </TableCell>
              <TableCell>{user.division} </TableCell>
              <TableCell>{user.status} </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/edit/${user.id}`}
                >
                  Edit
                </Button>{" "}
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteUserData(user.id)}
                >
                  Delete
                </Button>{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Pagination count={student.length} color="primary" /> */}
      <Button onClick={() => downloadExcel()}> Download to Excel</Button>
    </div>
  );
};

export default ViewStudent;
