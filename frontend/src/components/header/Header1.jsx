import   { useContext } from "react";
import { ColorModeContext } from "../../Theme";
import { Box, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import {DarkModeOutlined,  ExpandMore,  LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function Header1() {
    const colorMode = useContext(ColorModeContext);
    const options = [
        "AR",
        "EN"
       ];
    const theme = useTheme();
      const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event,
    index
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <Box sx={{
            bgcolor:"#2B3445",
            color:"#fff",
            py:"4px",
            borderBottomLeftRadius:14,
            borderBottomRightRadius:14
        }}>
<Container>
          <Stack direction={"row"} alignItems={"center"}>
             
            <Typography sx={{
                mr:2,
                p:"3px 10px",
                bgcolor:"#d23f57",
                fontSize:"10px",
                color:"#fff",
                fontWeight:"bold",
                borderRadius:"12px"
            }}>
                Hot
            </Typography >

            <Typography sx={{
                fontSize:"12px",
                color:"#fff",
                fontWeight:300,
            }}>
                Free Express Shipping
            </Typography>


            <Box flexGrow={1}/>


        <div>
        {theme.palette.mode === "light" ? (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <LightModeOutlined />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <DarkModeOutlined />
          </IconButton>
        )}
      </div>

      <List
        component="nav"
        aria-label="Device settings"
        sx={{ p:0,m:0 }}
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{"&:hover": {cursor:"pointer"},px:1}}
        >
          <ListItemText
            secondary={options[selectedIndex]}
            sx={{".MuiTypography-root":{fontSize:"15px", color:"white"} }}
          />
          <ExpandMore sx={{
            fontSize:"15px"
          }}/>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      <FacebookIcon sx={{
        fontSize:"16px",
        color:"#fff",
      }}/>
      <TwitterIcon sx={{
        fontSize:"16px",
        mx:1,
        color:"#fff",
      }}/>
      <InstagramIcon sx={{
        fontSize:"16px",
        color:"#fff",
      }}/>

      </Stack>
      </Container>


        </Box>
      
  )
}

export default Header1