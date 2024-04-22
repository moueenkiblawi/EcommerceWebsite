import { Box, Paper, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { KeyboardArrowRightOutlined } from '@mui/icons-material';

// eslint-disable-next-line react/prop-types
function Links({title}) {
  return (


    <Box sx={{
        ":hover .show":{display:"block"},
        ":hover ":{cursor:"pointer"},
        display:"flex",
        alignItems:"center",
        position:"relative",
        zIndex:2,
        }}>
    <Typography>
      {title}
    </Typography>
    <ExpandMoreIcon sx={{fontSize:"16px",ml:1}}/>
        <Box className='show'
         sx={{
        position:"absolute",
        top:"100%",
        minWidth:"170px",
        transform:"translate(-50%)",
        left:"50%",
        display:"none"
        }}>

    <Paper  
    sx={{
    mt:2,
    
        }}>

    <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton 
            sx={{
                display:"flex",
                p:0,
                px:1.5,
            }}>
              <ListItemText 
              sx={{
                "& .MuiTypography-root":
                {fontSize:"15px",
                fontWeight:300
            }
            }} 
              primary="Dashboard" />
              <Box flexGrow={1} />
            </ListItemButton>
          </ListItem>
          
          <ListItem  sx={{
            ":hover .sub-link":{display:"block"},
            position:"relative"
          }}
          disablePadding >
            <ListItemButton 
            sx={{
                display:"flex",
                p:0,
                px:1.5,
                
                }}>
              <ListItemText 
              sx={{
                "& .MuiTypography-root":
                {fontSize:"15px",
                fontWeight:300
            }
            }} 
              primary="Product" />
                 <Box flexGrow={1} />
              <KeyboardArrowRightOutlined fontSize='small' />
           
            </ListItemButton>

        <Box 
        className="sub-link"
        sx={{
            position:"absolute",
            top:0,
            left:"100%",
            display:"none"
    }}>    
        <Paper sx={{
            ml:1,
            minWidth:150
        }}> 

            <nav aria-label="secondary mailbox folders">
        <List>
        <ListItem disablePadding>
            <ListItemButton 
            sx={{
                display:"flex",
                p:0,
                px:1.5,
            }}>
              <ListItemText 
              sx={{
                "& .MuiTypography-root":
                {fontSize:"15px",
                fontWeight:300
            }
            }} 
              primary="Add Product" />
              <Box flexGrow={1} />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton 
            sx={{
                display:"flex",
                p:0,
                px:1.5,
            }}>
              <ListItemText 
              sx={{
                "& .MuiTypography-root":
                {fontSize:"15px",
                fontWeight:300
            }
            }} 
              primary="Edit Product" />
              <Box flexGrow={1} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>

      </Paper>

      </Box>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton 
            sx={{
                display:"flex",
                p:0,
                px:1.5,
            }}>
              <ListItemText 
              sx={{
                "& .MuiTypography-root":
                {fontSize:"15px",
                fontWeight:300
            }
            }} 
              primary="Orders" />
              <Box flexGrow={1} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton 
            sx={{
                display:"flex",
                p:0,
                px:1.5,
            }}>
              <ListItemText 
              sx={{
                "& .MuiTypography-root":
                {fontSize:"15px",
                fontWeight:300
            }
            }} 
              primary="Profile" />
              <Box flexGrow={1} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      </Paper>

      </Box>
  </Box>

  )
}

export default Links