import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import icons from "../footer/icon.png"
function Footer() {
    return (
        <Box>

            <Typography sx={{
                maxWidth: "100%",
                height: "auto",
                background: "#a5c926",
            }}>
                <Container>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: "35px 0", borderBottom: "1px solid hsla(0, 0%, 100%, 0.25)",p:"15px 15px 0 0"  }}>
                        <Grid item lg={2} md={2}  sm={3} xs={12} >
                            <Box sx={{ fontSize: "22px", color: "#fff", lineHeight: "32px", fontWeight: "400", fontFamily: "'Varela Round', sans-serif", p:"15px 0" }}>
                                ToyStore
                            </Box>
                        </Grid>
                        <Grid item lg={8} md={8} sm={9} xs={12} sx={{ textAlign: {lg:"center", md:"center", sm:"end", xs:"start"}, fontSize:{lg:"14px", md:"14px" , sm:"12px" , xs:"11px"}, p:"15px 0"}}>
                            <Link sx={{
                                textDecoration: "none",
                                color: "#fff",
                                m: "0 15px 0 15px",
                                p: "4px",
                                fontFamily: "'Open Sans', sans-serif",
                                cursor: "pointer"
                            }}>Home</Link>
                            <Link sx={{
                                textDecoration: "none",
                                color: "#fff",
                                m: "0 15px 0 15px",
                                p: "4px",
                                fontFamily: "'Open Sans', sans-serif",
                                cursor: "pointer"
                            }}>Catagory</Link>
                            <Link sx={{
                                textDecoration: "none",
                                color: "#fff",
                                m: "0 15px 0 15px",
                                p: "4px",
                                fontFamily: "'Open Sans', sans-serif",
                                cursor: "pointer"
                            }}>Delivery</Link>
                            <Link sx={{
                                textDecoration: "none",
                                color: "#fff",
                                m: "0 15px 0 15px",
                                p: "4px",
                                fontFamily: "'Open Sans', sans-serif",
                                cursor: "pointer"
                            }}>About</Link>
                            <Link sx={{
                                textDecoration: "none",
                                color: "#fff",
                                m: "0 15px 0 15px",
                                p: "4px",
                                fontFamily: "'Open Sans', sans-serif",
                                cursor: "pointer"
                            }}>Contact</Link>
                        </Grid>
                        <Grid item lg={2} md={2} sm={12} xs={12} sx={{textAlign:{lg:"end", md:"end", sm:"end", xs:"start"}, p:"30px 0"}}>
                            <img src={icons} alt="" />
                        </Grid>
                    </Grid>


                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: "35px 0" }}>
                        <Grid item lg={6} >

                            <Box>
                                <Typography sx={{ fontSize: "11px", color: "white" }}>
                                    Created with love by <Link sx={{ color: "white" }}> Elastic Themes</Link>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={6}  sx={{ textAlign: {lg:"end", md:"end", sm:"end", xs:"start"} }}>
                            <Typography sx={{ fontSize: "11px", color: "white" }}>
                                Powered by <Link sx={{ color: "white" }}> Webflow</Link>
                                <Link sx={{ color: "white", ml: "15px" }}> Style Guide</Link>
                                <Link sx={{ color: "white", ml: "15px" }}>   Licensing  </Link>
                            </Typography>

                        </Grid>

                    </Grid>




                </Container>
            </Typography>

        </Box>
    )
}

export default Footer