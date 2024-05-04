import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MainComp = () => {
  // global state
  const isLogin = useSelector((state) => state.isLogin);
  console.log(isLogin);
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          color: "Black",
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <Typography variant="h6">My Blog Aplication</Typography>
          <Box display={"flex"} marginLeft="auto" marginRight={0}>
            {!isLogin && (
              <>
                <Button
                  sx={{ margin: 1, color: "black" }}
                  LinkComponent={Link}
                  to="/"
                >
                  Login
                </Button>
                <Button
                  sx={{ margin: 1, color: "black" }}
                  LinkComponent={Link}
                  to="register"
                >
                  Register
                </Button>
              </>
            )}
            {isLogin && (
              <Button sx={{ margin: 1, color: "black" }}>Logout</Button>
            )}
          </Box>
        </Toolbar>
        {/* <Navbar /> */}
      </AppBar>
    </>
  );
};

export default MainComp;
