import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Typography } from "@mui/material";

export default function BlogCard({ title, content, username, createdAt }) {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        marginLeft: "40px",
        mt: 2,
        pt: 2,
        boxShadow: "5px 5px 10px #ccc",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {username}
          </Avatar>
        }
        title={title}
        subheader={createdAt}
      />
      <Typography>name:{username}</Typography>
      <Typography>content: {content}</Typography>
    </Card>
  );
}
