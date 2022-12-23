import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { height, width } from '@mui/system'
import React from 'react'
import rasm from "../Simple/1.jpeg"
import sam from "../Simple/2.svg"
function Simple() {
    return (
        <Box sx={{ p: "120px 0px", background: "#f8f8f8", width: "100%" }}>
            <Container>

                <Box sx={{ justifyContent: "center", display: "flex", mb: "80px" }}>

                    <Box sx={{
                        width: { lg: "45%", md: "50%", sm: "85%", xs: "70%" },
                        height: "100%",
                    }}>
                        <Typography sx={{
                            mb: "16px",
                            color: "#a5c926",
                            fontSize: "13px",
                            lineHeight: "16px",
                            fontWeight: "600",
                            textAlign: "center"
                        }}>
                            Made for Webflow
                        </Typography>
                        <Typography sx={{
                            mb: "16px",
                            fontFamily: "'Varela Round', sans-serif;",
                            fontSize: "32px",
                            textAlign: "center"
                        }}>
                            Simple & Colorful Ecommerce Template for Your Business
                        </Typography>
                    </Box>

                </Box>

                <Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                            <Box sx={{ textAlign: { lg: "start", md: "start", sm: "center", xs: "center" }, justifyContent: "center", display: "flex" }}>
                                <Box >

                                    <Typography sx={{
                                        mb: "16px",
                                        fontFamily: "'Varela Round', sans-serif;",
                                        fontSize: "32px",
                                    }}>
                                        Available for FREE!
                                    </Typography>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: { lg: "start", md: "start", sm: "center", xs: "center" },
                                        width: "100%"
                                    }}>

                                        <Typography sx={{
                                            width: "70px",
                                            height: "2px",
                                            background: "#a5c926",
                                            m: "8px 0 23px 0",

                                        }}></Typography>
                                    </Box>


                                    <Typography sx={{
                                        color: "#999", width: { lg: "85%", md: "85%", sm: "100%" }, fontSize: "14px",
                                        lineHeight: "24px",
                                        mb: "28px"
                                    }}>
                                        A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy
                                    </Typography>


                                    <Button sx={{
                                        height: '48px',
                                        p: "12px 28px",
                                        // width: "19%",
                                        borderRadius: "24px",
                                        background: "#a5c926",
                                        color: "white",
                                        "&:hover": {
                                            background: "#a5c926",
                                            boxShadow: "0 8px 8px -4px rgb(165 201 38 / 50%)"
                                        },
                                        mb: "30px"
                                    }}>
                                        GET IN NOW!
                                    </Button>
                                </Box>


                            </Box>
                        </Grid>
                        <Grid item lg={6} xl={6} md={6} sm={12} xs={12} sx={{ height: "auto" }}>
                            <img src={rasm} alt="" style={{ width: "100%", borderRadius: "16px", height: "100%" }} />
                        </Grid>

                    </Grid>


                    <Box sx={{ width:"100%", display:"flex", justifyContent:"center" }}>

                        <Box sx={{
                            width: { lg: "100%", md: "auto", sm: "70%", xs:"100%" },
                            height: "auto",
                            padding: "48px",
                            background: "white",
                            mt: "70px",
                            borderRadius: "20px"

                        }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item lg={6} md={6} sm={12} xs={12} >
                                    <Box sx={{
                                        width: "100%",
                                        height: "auto",
                                        display: "flex",
                                        justifyContent: "center",
                                        // textAlign:"center"
                                    }}>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item lg={2} md={2.5} sm={12} xs={12} sx={{ display: "flex", justifyContent: { lg: "start", md: "start", sm: "center" , xs: "center"}, }} >

                                                <Typography sx={{
                                                    width: "64px",
                                                    height: "64px",
                                                    background: "#a5c926",
                                                    borderRadius: "50px",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignContent: "center",
                                                    mb: "15px"

                                                }}>
                                                    <img src={sam} alt="" style={{ width: "35px" }} />
                                                </Typography>
                                            </Grid>
                                            <Grid item lg={10} md={9.5} sm={12} xs={12} sx={{ display: "flex", justifyContent: { lg: "start", md: "start", sm: "center" }, xs: "center", }}>

                                                <Typography sx={{
                                                    width: { lg: "80%", md: "95%", sm: "64%", xs:"100%" },
                                                    fontSize: "24px",
                                                    lineHeight: "32px",
                                                    fontWeight: "400",
                                                    fontFamily: "'Varela Round', sans-serif",
                                                    ml: "15px",
                                                    color: "#111",
                                                    textAlign: { lg: "start", md: "start", sm: "center", xs: "center" },
                                                    mb: "15px"

                                                }}>
                                                    Subscribe to our newsletter
                                                    & get <span style={{ color: '#a5c926' }}> 10% discount!</span>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12} >
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",

                                    }}>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5, lg: 6 }}>
                                            <Grid item lg={8.5} md={8} sm={12} xs={12} sx={{ mb: "15px" }}>
                                                <input type="text" style={{ width: "93%", height: "48px", padding: "0 15px", border: "2px solid #e5e5e5", borderRadius: "24px", background: "#f8f8f8", }} placeholder="Enter your email address" />
                                            </Grid>
                                            <Grid item lg={3.5} md={4} sm={12} xs={12}>
                                                <Button sx={{
                                                    width: "100%",
                                                    height: '50px',
                                                    p: "12px 28px",
                                                    borderRadius: "24px",
                                                    background: "#a5c926",
                                                    color: "white",
                                                    "&:hover": {
                                                        background: "#a5c926",
                                                        boxShadow: "0 8px 8px -4px rgb(165 201 38 / 50%)"
                                                    },
                                                    textTransform: "capitalize"
                                                }}>
                                                    Subscribe
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                </Box>
            </Container>

        </Box>
    )
}

export default Simple