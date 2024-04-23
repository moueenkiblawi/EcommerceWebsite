
import { Box, Container, Drawer, IconButton, ListItemIcon, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import WindowIcon from '@mui/icons-material/Window';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@emotion/react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Close } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Links from './Links';


function Header3() {
    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const theme=useTheme()
    const [state, setState] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    
    
  return (
    <Container sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        mt:5
    }} >
        <Box>
        <Button
        sx={{
            width:222,
            bgcolor:theme.palette.myColor.main,
            color:theme.palette.text.secondary,
        }}
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <WindowIcon/>
        <Typography 
        sx={{
            padding:"0",
            textTransform:"capitalize",
            mx:1,
        }}>

        Categories
        </Typography>
        <Box flexGrow={1}/>
        
        <KeyboardArrowRightIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
            ".MuiPaper-root":{width:222,    
                        bgcolor:theme.palette.myColor.main,
            },

        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ElectricBikeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Bikes</ListItemText>
         
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LaptopChromebookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Electronics</ListItemText>
         
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Books</ListItemText>
         
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SportsEsportsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Games</ListItemText>
         
        </MenuItem>
      </Menu>
      </Box>

      {useMediaQuery('(min-width:1200px)')&&(  
     <Stack gap={4} direction={"row"} alignItems={"center"}>

     <Links title={"Home"}/>
     <Links title={"Mega Menu"}/>
     <Links title={"Full Screen Menu"}/>
     <Links title={"Pages"}/>
     <Links title={"User Account"}/>
     <Links title={"vendor Account"}/> </Stack>
     )}
   

      { useMediaQuery('(max-width:1200px)') && (<IconButton onClick={toggleDrawer("top", true)}>

<MenuIcon/>
</IconButton>)}
      
      <Drawer anchor={"top"} open={state["top"]} onClose={toggleDrawer("top", false)}
      sx={{".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper"
      :{height:"100%"}}}
      >

            <Box  sx={{
              width:444,
              mx:"auto",
              mt:6,
              position:"relative",
              pt:0,

            }}>
            

            <IconButton sx={{
              ":hover":{rotate:"180deg",transition:"0.3s"},
                position:"absolute",
                top:0,
                right:0,
                
            }}onClick={toggleDrawer("top", false)}>
            <Close />

            </IconButton>
            
            {[
              {mainLink:"Home",subLink:["Link1","Link2","Link3"]},
              {mainLink:"Home2",subLink:["Link1","Link2","Link3"]},
              {mainLink:"Home3",subLink:["Link1","Link2","Link3"]},
          ].map((item)=>{
              return(
                <Accordion key={item.mainLink} elevation={0} sx={{marginTop:"80px",bgcolor:"initial"}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography >{item.mainLink}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <List sx={{py:0, my:0}}>
                  <ListItem sx={{py:0, my:0}}>
                    <ListItemButton>
                      <ListItemText primary={item.subLink[0]} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem >
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary={item.subLink[1]} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem >
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary={item.subLink[2]} />
                    </ListItemButton>
                  </ListItem>
                </List>
                </AccordionDetails>
              </Accordion>
              );
            })}
     
      
      
            </Box>
          </Drawer>
    </Container>
  )
}

export default Header3