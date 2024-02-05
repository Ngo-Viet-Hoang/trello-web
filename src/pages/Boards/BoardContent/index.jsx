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
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      Broad Content
    </Box>
  );
}

export default BoardContent;
