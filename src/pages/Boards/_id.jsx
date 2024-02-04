import { Box, Container } from "@mui/material";
import React from "react";
import AppBar from "~/components/AppBar";

import BoardContent from "./BoardContent";
import BoardBar from "./Boardbar";

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
}

export default Board;
