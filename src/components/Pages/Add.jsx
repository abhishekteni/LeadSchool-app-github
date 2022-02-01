import React, { useState } from "react";
import { addusers } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
  Select,
  RadioGroup,
} from "@material-ui/core";
// import "./Add.css";
const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "50px 20% 0 20%",
    flex: 2,
    "& > *": {
      margin: "20px 0 0 0",
    },
  },
});
const initialValues = {
  name: "",
  school: "",
  email: "",
  date: "",
  division: "",
  status: "",
};

const Add = () => {
  const [user, setUser] = useState(initialValues);
  const { name, school, email, date, division, status } = user;
  const classes = useStyles();
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addusers(user);
    navigate("/");
  };
  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add user</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
      </FormControl>
      <FormControl>
        <InputLabel>school</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="school"
          value={school}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={email} />
      </FormControl>
      <FormControl>
        <InputLabel>Date</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="date" value={date} />
      </FormControl>
      <FormControl>
        <InputLabel>division</InputLabel>
        <Select
          value={division}
          required
          onChange={(e) => onValueChange(e)}
          name="division"
        >
          <option value="1st">1</option>
          <option value="2nd">2</option>
          <option value="3rd">3</option>
          <option value="4th">4</option>
          <option value="5th">5</option>
          <option value="6th">6</option>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          required
          onChange={(e) => onValueChange(e)}
          name="status"
        >
          <option value="Active">Active</option>
          <option value="Inactive">InActive</option>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addUserDetails()}
      >
        Add user
      </Button>
    </FormGroup>
  );
};

export default Add;
