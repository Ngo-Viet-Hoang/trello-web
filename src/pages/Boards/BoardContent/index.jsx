import { Box } from "@mui/material";
import React from "react";

function BoardContent() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) =>
          `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boarBarHeight})`,
        display: "flex",
        alignItems: "center",
        backgroundColor: "primary.main",
      }}
    >
      Broad Content
    </Box>
  );
}

export default BoardContent;
