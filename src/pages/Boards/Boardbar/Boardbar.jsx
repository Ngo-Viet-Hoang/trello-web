import { Bolt, Dashboard, PersonAdd } from "@mui/icons-material";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import FilterListIcon from "@mui/icons-material/FilterList";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from "@mui/material";

const MENU_STYLES = {
  color: "white",
  backgroundColor: "transparent",
  border: "none",
  px: "5px",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    bgColor: "primary.50",
  },
};

function BoardBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boarBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        px: 2,
        overflowX: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip sx={MENU_STYLES} icon={<Dashboard />} label="Board" clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspaces"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip sx={MENU_STYLES} icon={<Bolt />} label="Automation" clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          startIcon=<PersonAdd />
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": {
              borderColor: "white",
            },
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
              border: "none",
              color: "white",
              cursor: "pointer",
              "&:first-of_type": {
                bgcolor: "#a4b0be",
              },
            },
          }}
        >
          <Tooltip title="trello">
            <Avatar alt="trello" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="trello">
            <Avatar alt="trello" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="trello">
            <Avatar alt="trello" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="trello">
            <Avatar alt="trello" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="trello">
            <Avatar alt="trello" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="trello">
            <Avatar alt="trello" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="trello">
            <Avatar alt="trello" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
