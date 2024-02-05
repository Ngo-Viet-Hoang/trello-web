import React, { useState } from "react";
import ModeSelect from "~/components/ModeSelect";
import {
  Avatar,
  Badge,
  Box,
  Button,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Profile from "./Menus/Profile";
import { Close, LibraryAdd, Search } from "@mui/icons-material";

function AppBar() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <AnalyticsIcon sx={{ color: "white" }} />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "white",
            }}
            variant="span"
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button
            variant="outlined"
            startIcon=<LibraryAdd />
            sx={{
              color: "white",
              border: "none",
              "&:hover": { border: "none" },
            }}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          size="small"
          id="outlined-search"
          label="Search..."
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <Close
                fontSize="small"
                sx={{
                  color: searchValue ? "white" : "transparent",
                  cursor: "pointer",
                }}
                onClick={() => setSearchValue("")}
              />
            ),
          }}
          sx={{
            minWidth: "120px",
            maxWidth: "180px",
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": { borderColor: "white" },
              "&.Mui-focused fieldset": { borderColor: "white" },
            },
          }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Notification" sx={{ cursor: "pointer" }}>
          <HelpOutlineIcon sx={{ color: "white" }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  );
}

export default AppBar;
