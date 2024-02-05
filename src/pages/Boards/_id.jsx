import { Container } from "@mui/material";

import AppBar from "~/components/AppBar/Appbar";
import BoardContent from "./BoardContent/BoardContent";
import BoardBar from "./Boardbar/Boardbar";

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
