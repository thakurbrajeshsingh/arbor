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
    height: "70vh",
    width: "90vh",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    height: "70vh",
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
});

const Login = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className={classes.component}>
          <Box style={{ display: "flex" }}>
            <Box className={classes.image}>
              <Typography variant="h5">Login</Typography>
              <Typography style={{ marginTop: "20px" }}>
                Get Access to your orders,wishlist and Recommendations
              </Typography>
            </Box>
            <Box></Box>
          </Box>
          <TextField />
          <TextField />
          <Typography>
            By continuing, you agree to Flipkart's Terms of use of Privacy
            Policy
          </Typography>
          <Button>Login</Button>
          <Typography>OR</Typography>
          <Typography>Request OTP</Typography>
          <Typography>New to Flipkart? Create Account </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Login;
