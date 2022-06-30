import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./styles/HeaderStyles";

import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { setRemoveToken } from "../store/slice/auth";
import { stringAvatar } from "../utils/getAvatarString";
import About from "./About";
import { LinkBase } from "./styles/LinkBase";
import { AboutPage } from "../pages/AboutPage";

const settings = ["Logout"];

export const Header = ({ rightContent, ...rest }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" {...rest} style={{ background: "green" }}>
      <Toolbar>
        <Container>
          <img
            style={{ maxWidth: "100px" }}
            src="https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_white-1.png"
            alt=""
          />
        </Container>
          <LinkBase to= "/about">About us</LinkBase>
          <LinkBase to="/quiz">Quiz</LinkBase>
        <Box sx={{ flexGrow: 1 }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open menu">
            <div>
              {rightContent}
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Avatar
                  size="small"
                  {...stringAvatar(currentUser.email)}
                  style={{ background: "white", color: "green" }}
                />
              </IconButton>
            </div>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => dispatch(setRemoveToken())}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
