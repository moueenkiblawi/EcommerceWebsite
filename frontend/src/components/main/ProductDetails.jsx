/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'

function ProductDetails() {
  return (
    <Box  sx={{
        display: 'flex',  alignItems: 'center',gap:2.5,flexDirection:{xs: 'column', sm:'row'},
    }}>
        <Box  sx={{display:"flex"}}>
            <img width={300}  src="images/final.png" alt="" />
        </Box>

        <Box  sx={{textAlign:{xs:"center",sm:"left"},}} >
            <Typography variant='h5'mt={4} mb={1} >
                WOMEN's FASHION
            </Typography>

            <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="subtitle1">
                $12.99
            </Typography>

            <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.SKACJLK;ASL;KA;SK;LKJL

            </Typography>

            <Stack direction={'row'} gap={1} sx={{justifyContent:{xs:"center",sm:"left"},}} >

            {["images/final.png","images/final.png"].map((item) => {
                    return(
                        <img style={{borderRadius:3}} width={90} height={100}  key={item} src={item} alt=""  />
                    )
                })}

            </Stack>

            <Button
            sx={{textTransform:"capitalize",mb:{xs:1,sm:1},mt:1, }}
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