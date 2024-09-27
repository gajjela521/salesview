import React from "react";
import './Topbar.css';
import { Header } from "./Header";
import Box from '@mui/material/Box';
import { IconButton, Table, TableRow, TableCell } from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import TimeDisplayEST from "./TimedisplayEST";
import TimeDisplayIST from "./TimedisplayIST";
import TimeDisplayHKT from "./TimedisplayHKT";

export const Topbar = (): JSX.Element => {
  return (
    <>
      <Header />
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ backgroundColor: '#f0f0f0', padding: '10px', marginTop: '-1px' }}>
        {/* Time display box */}
        <Box display="flex" borderRadius="10px">
          <Table>
            <TableRow>
              <TableCell><TimeDisplayEST /></TableCell>
              <TableCell><TimeDisplayIST /></TableCell>
              <TableCell><TimeDisplayHKT /></TableCell>
            </TableRow>
          </Table>
        </Box>

        {/* Icons box */}
        <Box display="flex" borderRadius="10px" justifyContent="flex-end">
          <IconButton>
            <NotificationsActiveOutlinedIcon />
          </IconButton>
          <IconButton>
            <CalculateOutlinedIcon />
          </IconButton>
          <IconButton>
            <HelpOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
