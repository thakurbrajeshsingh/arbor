import {
  Box,
  Button,
  Dialog,
  DialogContent,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { authenticatesignup } from "../../service/api";

const useStyles = makeStyles({
  component: {
    height: "80vh",
    width: "100vh",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    height: "80vh",
    backgroundRepeat: "no-repeat",
    background: "#2874f0",
    width: "40%",
    backgroundPosition: "center 85%",
    padding: "45px 35px",
    "& > *": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  login: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  loginBtn: {
    textTransform: "none",
    background: "#FB641B",
    color: "#FFFFFF",
    height: 48,
    borderRadius: 2,
  },
  requestBtn: {
    textTransform: "none",
    background: "#FFFFFF",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20% )",
  },
  createText: {
    textAlign: "center",
    marginTop: "auto",
    fontSize: 14,
    color: "#2874f0",
    fontWeight: 600,
    cursor: "pointer",
  },
  signup: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 13,
    },
  },
});
const initialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get Access to your orders,wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you are new here!!!",
    subHeading: "Sign up with your mobile number to get Started",
  },
};
const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};
const LoginDialog = ({ open, setOpen, setAccount }) => {
  const classes = useStyles();

  const [account, toggleAccount] = useState(initialValue.login);
  const [signup, setsignup] = useState(signupInitialValues);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(initialValue.login);
  };

  const toggleUserAccount = () => {
    toggleAccount(initialValue.signup);
  };

  const signupUser = async () => {
    let response = await authenticatesignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.username);
  };

  const onInputChange = (e) => {
    setsignup({ ...signup, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>
              {account.subHeading}
            </Typography>
          </Box>
          {account.view === "login" ? (
            // Sign-In Account
            <Box className={classes.login}>
              <TextField name="username" label="Enter Email/Mobile Number" />
              <TextField name="password" label="Enter Password" />
              <Typography className={classes.text}>
                By continuing, you agree to Flipkart's Terms of use of Privacy
                Policy
              </Typography>
              <Button variant="contained" className={classes.loginBtn}>
                Login
              </Button>
              <Typography
                style={{ textAlign: "center" }}
                className={classes.text}
              >
                OR
              </Typography>
              <Button variant="contained" className={classes.requestBtn}>
                Request OTP
              </Button>
              <Typography
                onClick={toggleUserAccount}
                className={classes.createText}
              >
                New to Flipkart? Create Account
              </Typography>
            </Box>
          ) : (
            // Signup   State Change
            <Box className={classes.signup}>
              <TextField
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter Firstname"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter Lastname"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter Phone number"
              />
              <Button
                onClick={signupUser}
                variant="contained"
                className={classes.loginBtn}
              >
                Signup
              </Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};
export default LoginDialog;
