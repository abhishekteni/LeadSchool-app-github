import React, { useState } from "react";
import { addusers } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
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
  date: new Date(),
  division: "",
  status: "",
};

const Add = () => {
  const [user, setUser] = useState(initialValues);
  const { name, school, email, date, division, status } = user;
  const classes = useStyles();
  const navigate = useNavigate();
  const convertToDefEventPara = (e) => {
    setUser({ ...user, date: e });
  };
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
        <Input
          require
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>school</InputLabel>
        <Input
          require
          onChange={(e) => onValueChange(e)}
          name="school"
          value={school}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          require
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
        />
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
          require
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

        <RadioGroup
          row
          onChange={(e) => onValueChange(e)}
          name="status"
          require
        >
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
        onClick={() => addUserDetails()}
        require
      >
        Add user
      </Button>
    </FormGroup>
  );
};

export default Add;
