import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box, TextField } from "@mui/material";
import TextImage from "../assets/Create.png";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateBlog() {
  const id = localStorage.getItem("userId");
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    try {
      // if (!id) {
      //   throw new Error("User ID not found in localStorage");
      // }
      const { data } = await axios.post("/api/v1/blog/create-blogs", {
        title: inputs.title,
        content: inputs.content,
        user: id,
      });
      if (data?.success) {
        alert("Blog created");
        navigate("/blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        component="img"
        sx={{
          height: "50%",
          width: "50%",
          maxHeight: { xs: "100%", md: "100%" },
          maxWidth: { xs: "100%", md: "100%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
        alt="The house from the offer."
        src={TextImage}
      />
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Start Writting
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        // aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            maxWidth: "90%",
            maxHeight: "90%",
            width: "auto",
            margin: "auto",
          },
        }}
      >
        <DialogTitle>{"Create your Blog"}</DialogTitle>
        <DialogContent>
          <Box mb={2}>
            <TextField
              name="title"
              id="outlined-basic"
              label="Write title"
              variant="outlined"
              value={inputs.title}
              onChange={handleChange}
              required
            />
          </Box>
          <Box mt={2}>
            <TextField
              name="content"
              id="outlined-basic"
              label="What's on your mind"
              variant="outlined"
              value={inputs.content}
              onChange={handleChange}
              required
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                color: "black",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                color: "black",
              },
            }}
          >
            Public
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
