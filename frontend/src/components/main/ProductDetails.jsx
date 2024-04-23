/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { useState } from 'react'


function ProductDetails({clickedProduct}) {

    const [selectedImg,setselectedImg]=useState(0);
    // eslint-disable-next-line no-unused-vars
    const  [myData, setmyData] = useState('left');


    
    const handleAlignment = (event, newValue) => {
        if(newValue !==null){
        setmyData(newValue)
        }};
  return (
    <Box  sx={{
        display: 'flex',  alignItems: 'center',gap:2.5,flexDirection:{xs: 'column', sm:'row'},
    }}>
        <Box  sx={{display:"flex"}}>
            <img width={360}  src={clickedProduct.attributes.productImg.data[selectedImg].attributes.url} alt="" />
        </Box>

        <Box  sx={{textAlign:{xs:"center",sm:"left"},py:2}} >
            <Typography variant='h5'mt={4} mb={1} >
               {clickedProduct.attributes.productTitle}
            </Typography>

            <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="subtitle1">
            ${clickedProduct.attributes.productPrice}
            </Typography>

            <Typography variant='body1'>
             {clickedProduct.attributes.productDescription}

            </Typography>

            <Stack direction={'row'} gap={1} sx={{justifyContent:{xs:"center",sm:"left"},}} >


            <ToggleButtonGroup
      value={selectedImg}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      
      sx={{
        ".Mui-selected":{
          border:"1px solid royalblue !important",
          borderRadius:"5px !important",
          opacity:1, 
          backgroundColor:"initial",
          
        },
        mt:1
      }}
    >

            {clickedProduct.attributes.productImg.data.map((item,index) => {
                    return(

                        <ToggleButton  key={item.id} 
                        value={index}
                        sx={{
                            width:"110px",
                            height:"110px",
                            mx:1,
                            p:"0",
                            opacity:"0.5"
                        }}
                        >

                            <img onClick={()=>{
                                setselectedImg(index)
                                }} 
                                style={{borderRadius:3}}
                                 width={"100%"} height={"100%"}
                                 src={item.attributes.url} alt=""  />
                          </ToggleButton>
                    )
                })}

                </ToggleButtonGroup>

            </Stack>

            <Button
            sx={{textTransform:"capitalize",mb:{xs:1,sm:1},mt:2, }}
            variant='contained'
            >
                <AddShoppingCartOutlined sx={{mr:1}} fontSize='small' />
                Buy now
            </Button>

        </Box>
    </Box>

    )
}

export default ProductDetails