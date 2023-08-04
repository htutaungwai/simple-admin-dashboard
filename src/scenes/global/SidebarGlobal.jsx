import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

// ICONS
import {
  LightModeOutlined,
  PeopleOutlined,
  HomeOutlined,
  ReceiptOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
} from "@mui/icons-material";

const SidebarGlobal = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("DashBoard");

  return (
    <Box
      sx={{
        "& .sidebar-inner": {
          background: `blue`,
        },
        "& pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },

        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },

        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },

        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },

        "& .pro-menu-item.active": {
          color: " #6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO and MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box mb="25px">
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img
                    alt="profile-user"
                    width={"100px"}
                    height={"100px"}
                    src="../../assets/user.jpg"
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>

                <Box>
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight={"bold"}
                    sx={{ m: "10px 0 0 10px" }}
                  >
                    Htut Aung Wai
                  </Typography>
                  <Typography>VIP Admin</Typography>
                </Box>
              </Box>
            )}
          </MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SidebarGlobal;
