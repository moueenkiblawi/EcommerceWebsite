import { Box, Button, Typography } from '@mui/material'

function Footer() {
  return (
   <Box sx={{
    bgcolor:"#2B3445",
    py:1.3,
    borderTopLeftRadius:8,
    borderTopRightRadius:"8",
    
   }}>

    <Typography sx={{
        justifyContent:"center",
        display:"flex",
        alignItems:"center",
        color:"HighlightText",
        fontSize:18
    }} variant='h6'>

        Designed and developed by

            <Button sx={{
                mx:0.5,
                fontSize:"18px",
                textTransform:"capitalize",
                color:"#ff7790"
            }}
            variant='text'
            color='primary'>

                Moueen Kiblawi
            
                </Button>
        &copy; 2024 All rights reserved.


    </Typography>
   </Box>
  )
}

export default Footer