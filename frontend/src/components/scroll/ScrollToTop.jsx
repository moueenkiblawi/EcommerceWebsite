import Fab from '@mui/material/Fab';
import { KeyboardArrowUp } from '@mui/icons-material';
import { Zoom, useScrollTrigger } from '@mui/material';

function ScrollToTop() {
  return (

    <Zoom in={useScrollTrigger({threshold:100 })}>

   
    <Fab 
    onClick={() =>{
    window.scrollTo(0,0)}
    }
    sx={
        {
            position:"fixed",
            bottom:33,
            right:33,            
        }
    } 
    color="primary" 
    size='small'
    variant='extended'
    aria-label="add">
        <KeyboardArrowUp />
      </Fab>
      </Zoom>
  )
}

export default ScrollToTop