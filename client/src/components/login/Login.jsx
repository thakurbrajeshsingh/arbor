import { Dialog, DialogContent } from "@material-ui/core";

const Login = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <p>Hello </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Login;
