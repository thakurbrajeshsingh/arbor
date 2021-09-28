import {
  Box,
  Button,
  Dialog,
  DialogContent,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

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
});

const Login = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">Login</Typography>
            <Typography style={{ marginTop: "20px" }}>
              Get Access to your orders,wishlist and Recommendations
            </Typography>
          </Box>
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
            <Typography className={classes.createText}>
              New to Flipkart? Create Account{" "}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
