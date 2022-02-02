import React, { useState } from "react";
import { editusers, getusers } from "../../Services/api";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useNavigate, useParams } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  FormLabel,
  Typography,
  Select,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { useEffect } from "react";
const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "50px 20% 0 10%",
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
  date: new Date(),
  division: "",
  status: "",
};

const Edit = () => {
  const [user, setUser] = useState(initialValues);
  const { name, school, email, date, division, status } = user;
  const classes = useStyles();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loaduserData();
  }, []);

  const loaduserData = async () => {
    const response = await getusers(id);
    setUser(response.data);
  };
  const convertToDefEventPara = (e) => {
    setUser({ ...user, date: e });
  };
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    await editusers(id, user);
    navigate("/");
  };
  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit user</Typography>
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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            require
            autoOk={true}
            showTodayButton={true}
            value={date}
            onChange={convertToDefEventPara}
            label="Date"
            format="MM/dd/yyyy"
            variant="inline"
            disableToolbar
            // onChange={(e) => convertToDefEventPara(e)}
          ></KeyboardDatePicker>
        </MuiPickersUtilsProvider>

        {/* <InputLabel>Date</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="date" value={date} /> */}
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
        <FormLabel>Status</FormLabel>

        <RadioGroup row onChange={(e) => onValueChange(e)} name="status">
          <FormControlLabel value="active" control={<Radio />} label="Active" />
          <FormControlLabel
            value="Inactive"
            control={<Radio />}
            label="InActive"
          />
        </RadioGroup>
        {/* <Select
          value={status}
          required
          onChange={(e) => onValueChange(e)}
          name="status"
        >
          <option value="Active">Active</option>
          <option value="Inactive">InActive</option>
        </Select> */}
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => editUserDetails()}
      >
        Edit user
      </Button>
    </FormGroup>
  );
};

export default Edit;
