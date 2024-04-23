import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography,useTheme  } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css'
import IconSection from "./IconSection";

const mySlider = [
    {
      text: "MEN",
      link: "./images/banner-15.jpg", // Adjusted image link with forward slash
    },
   
    {
      text: "WOMEN",
      link: "./images/banner-25.jpg", // Adjusted image link with forward slash
    },
  ];

function Hero() {

    const theme=useTheme();

  return (
    <Container
    >
      
        
    <Box 
    sx={{
        mt: 2.5,
        display: "flex",
        alignItems: "center",
        gap:2,
        pt:2,
      }}>


    <Swiper
       loop={true}
        pagination={{
          dynamicBullets: true,
         

        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      {mySlider.map((item) => {
    return (
      <SwiperSlide key={item.link} className="parentSlider">

        <img src={item.link} alt="" />

            <Box 
              sx={{
                [theme.breakpoints.up("sm")]: {
                  position: "absolute",
                  left: "10%",
                  textAlign: "left",
                },
    
                [theme.breakpoints.down("sm")]: {
                  pt: 4,
                  pb: 6,
                },
              }}
            >
                <Typography variant='h6' 
                sx={{
                    color:"#222"
                }}>
                    LIFESTYLE COLLECTION
                </Typography>

                <Typography variant='h4' 
                sx={{
                    color:"#222",
                    my:1,
                    fontWeight:400,
                }}>
                    {item.text}
                </Typography>

                <Stack sx={{
                    justifyContent:{xs:'center',sm:"left"}
                }}
                direction={"row"}
                alignItems={"center"}
                >
                    <Typography variant='h5' 
                sx={{
                    color:"#333",
                    mr:1,
                    
                }}>
                    SALE UP TO
                </Typography>

                <Typography variant='h5' 
                sx={{
                    color:"#D23F57",
                    
                }}>
                    30% OFF
                </Typography>

                </Stack>

                <Typography variant='body1' 
                sx={{
                    color:"#000",
                    mt:1,
                    fontWeight:300,
                                        
                }}
                >
                    Get Free Shipping  on orders over $99.00
                </Typography>

                <Button sx={{
                    px:5,
                    py:1,
                    mt:2,
                    backgroundColor:"#222",
                    boxShadow:"0px 4px 16px rgba(43,52,69,0.1)",
                    borderRadius:'1px',
                    color:"#fff",   
                    "&:hover":{
                        bgcolor:"#151515",
                        boxShadow:"0px 4px 16px rgba(43,52,69,0.1)"
                    },
                }}
                variant="contained" >
                    Shop Now
                </Button>

            </Box>

        </SwiperSlide>
        );
    })}
        
        
      </Swiper>

      

      <Box  
      sx={{
        display:{xs:'none', md:'block',minWidth:"26.6%"},
      }}>
        <Box sx={{
            position:"relative"
        }}>
          <img width={"100%"} src="./images\banner-17.jpg" alt="" />

          <Stack sx={{
            position:"absolute",
            top:"50%",
            transform:"translateY(-50%)",
            left:31,
        }}>

            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "20px",
              }}
            >
              NEW ARRIVALS
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: "#2B3445",
                lineHeight: "18px",
                fontSize:"22px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: "#2B3445",
                fontSize:"22px",

              }}
            >
              SALE 20% OFF
            </Typography>

            <Link sx={{
                color: "#2B3445",
                display: 'flex',
                alignItems:"center",
                gap:"5px",
                transition:"0.2s",
                fontSize:"14px",

                "&:hover": {
                    color:"#D23F57",
                }
            }}
            href="#"
            underline="none"
            >
                Shop Now

                <KeyboardArrowRightOutlined sx={{fontSize:"13px"}}/>
            </Link>

          </Stack>
        </Box>



        <Box sx={{
            position:"relative"
        }}>
          <img  width={"100%"} src="./images\banner-16.jpg" alt="" />

          <Stack sx={{
            position:"absolute",
            top:"50%",
            transform:"translateY(-50%)",
            left:31,
        }}>

            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "20px",
              }}
            >
              GAMING 4K
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: "#2B3445",
                lineHeight: "18px",
                fontSize:"22px",
                mt: 1,
              }}
            >
              DESKTOPS &
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: "#2B3445",
                fontSize:"22px",

              }}
            >
              LAPTOPS
            </Typography>

            <Link sx={{
                color: "#2B3445",
                display: 'flex',
                alignItems:"center",
                gap:"5px",
                transition:"0.2s",
                fontSize:"14px",

                "&:hover": {
                    color:"#D23F57",
                }
            }}
            href="#"
            underline="none"
            >
                Shop Now

                <KeyboardArrowRightOutlined sx={{fontSize:"13px"}}/>
            </Link>

          </Stack>

        </Box>

      </Box>

    </Box>
      <IconSection/>
      
    </Container>
  );
}

export default Hero;
