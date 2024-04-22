import { Container, Stack,Box, Typography, Divider } from '@mui/material'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useTheme } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';

function IconSection() {
    const theme = useTheme();
  return (

    <Container sx={{bgcolor:theme.palette.mode=== "dark" ? "#000":"#fff"}}>

        <Stack   divider={useMediaQuery('(min-width:600px)') ? <Divider orientation="vertical" flexItem />:null}
 direction={"row"} alignItems={"center"} flexWrap={"wrap"} spacing={2}  >
         
            <MyBox icon={<ElectricBoltIcon fontSize='large'/>} 
            title={"Fast Delivery"}
             subTitle={"Start from $10"}/>

            <MyBox icon={<CreditScoreIcon fontSize='large'/>}
             title={"Money Guarantee"}
              subTitle={"7 Days back"}/>

            <MyBox icon={<WorkspacePremiumIcon fontSize='large'/>} 
            title={"365 Days"}
             subTitle={"For free return"}/>

            <MyBox icon={<AccessAlarmIcon  fontSize='large'/>} 
            title={"Payment"} 
            subTitle={"Secure system"}/>

        </Stack>

    </Container>

    )
}

export default IconSection


// eslint-disable-next-line react/prop-types
const MyBox = ({icon,title,subTitle})=>{
    const theme=useTheme();
    return(
       <Box sx={{
        width:"250px",
        display:"flex",
        flexGrow:1,
        alignItems:"center",
        gap:3,
        justifyContent:useMediaQuery('(min-width:600px)')?"center":"left",
        py:1.6,
       }} >
        {icon}

        <Box>
            <Typography variant='body1'>
                {title}
            </Typography>
            <Typography sx={{
                fontWeight:300,
                color:theme.palette.text.secondary
            }}
            variant='body1'
            >

                {subTitle}
            </Typography>
        </Box>
       </Box> 
    );
}


