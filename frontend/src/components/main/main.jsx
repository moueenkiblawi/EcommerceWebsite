import { Box, Container, Dialog, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@emotion/react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import { Close } from '@mui/icons-material';
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";


function Main() {

  const allProductAPI ="products?populate=*";
  const menProductAPI ="products?populate=*&filters[category][$eq]=Men"
  const WomenProductAPI ="products?populate=*&filters[category][$eq]=women"
  const ElectronicsApi ="products?populate=*&filters[category][$eq]=electro"

  const  [myData, setmyData] = useState(allProductAPI);

  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  


  const handleAlignment = (event, newValue) => {
    setmyData(newValue)
    

  };
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    // @ts-ignore
    return <div>Error: {error.message}</div>;
  }

 if(data.data && data.data.length > 0){
  console.log(data)
  return (
    <Container sx={{
        py:9
    }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Product</Typography>
          <Typography variant="body1" fontWeight={300}>
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={myData}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            className="myButton"
            value={allProductAPI}
            aria-label="left aligned"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            All Products
          </ToggleButton>
          <ToggleButton
            className="myButton"
            value={menProductAPI}
            aria-label="centered"
            sx={{
              color: theme.palette.text.primary,
              mx: "16px !important",
            }}
          >
            Men Category
 
          </ToggleButton>
          <ToggleButton
            className="myButton"
            value={WomenProductAPI}
            aria-label="right aligned"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            Women Category
          </ToggleButton>

          <ToggleButton
            className="myButton"
            value={ElectronicsApi}
            aria-label="right aligned"
            sx={{
              color: theme.palette.text.primary,
              mx: "16px !important",

            }}
          >
            Electronics Category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} >
       {data.data.map((item)=>{
        return(
            <Card key={item.id} 
            sx={{
                 maxWidth: 333, 
                 mt:6,
                 ":hover .MuiCardMedia-root":{scale:"1.1",transition:"0.35s",rotate:"1deg"} 
                 }} >

            <CardMedia
              sx={{ height: 277 }}
              // @ts-ignore
              image={`${
                item.attributes.productImg.data[0].attributes.url}`}
              title="green iguana"
            />
  
            <CardContent>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography gutterBottom variant="h6" component="div">
                 {item.attributes.productTitle}
                </Typography>
  
                <Typography variant="subtitle1" component="p">
                  ${item.attributes.productPrice}
                </Typography>
              </Stack>
  
              <Typography variant="body2" color="text.secondary">
              {item.attributes.productDescription}
              </Typography>
            </CardContent>
  
            <CardActions sx={{justifyContent:"space-between"}}>
  
              <Button onClick={handleClickOpen} sx={{textTransform:"capitalize"}} size="large">
                  <AddShoppingCartIcon fontSize="small"/>
                  add to cart
              </Button>
              <Rating  precision={0.5}  name="read-only" value={item.attributes.productRating} readOnly />
            </CardActions>
  
          </Card>
        )
       })}
      </Stack>


      
      <Dialog
        sx={{
            ".MuiPaper-root":{minWidth:{xs:"100%",md:800}},
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton 
        onClick={handleClose}
        
        sx={{
              ":hover":{rotate:"180deg",transition:"0.3s",color:"red"},
                position:"absolute",
                top:0,
                right:0,

                
                
            }}>
            <Close />

            </IconButton>

            <ProductDetails/>

      </Dialog>
    </Container>
  );
 } else {
  // Render a message indicating that no data is available
  return <Typography>No data available</Typography>;
}
}

export default Main;
