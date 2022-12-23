import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import b1 from "../instagram/b1.jpg"
import b2 from "../instagram/b2.jpg"
import b3 from "../instagram/b3.jpg"
import b4 from "../instagram/b4.jpg"
import b5 from "../instagram/b5.jpg"
import b6 from "../instagram/b6.jpg"
function Instagram() {
    return (
        <Box sx={{ p: "0px 0px 120px", background: "#f8f8f8", width: "100%" }}>
            <Container>
                <Box sx={{ justifyContent: "center", display: "flex", mb: "80px" }}>

                    <Box sx={{
                        width: { lg: "45%", md: "50%", sm: "85%", xs: "100%" },
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
                            @ElasticThemes
                        </Typography>
                        <Typography sx={{
                            mb: "16px",
                            fontFamily: "'Varela Round', sans-serif;",
                            fontSize: "32px",
                            textAlign: "center"
                        }}>
                            We're on Instagram!
                        </Typography>
                    </Box>

                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", textAlign:"center" }}>
                    <Box>

                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item lg={2} md={2} sm={4} xs={4}>
                                <img src={b1} alt="" style={{ width: "100%", borderRadius: "10px" }} />
                            </Grid>
                            <Grid item lg={2} md={2} sm={4} xs={4}>
                                <img src={b2} alt="" style={{ width: "100%", borderRadius: "10px" }} />

                            </Grid>
                            <Grid item lg={2} md={2} sm={4} xs={4}>
                                <img src={b3} alt="" style={{ width: "100%", borderRadius: "10px" }} />

                            </Grid>
                            <Grid item lg={2} md={2} sm={4} xs={4}>
                                <img src={b4} alt="" style={{ width: "100%", borderRadius: "10px" }} />

                            </Grid>
                            <Grid item lg={2} md={2} sm={4} xs={4}>
                                <img src={b5} alt="" style={{ width: "100%", borderRadius: "10px" }} />

                            </Grid>
                            <Grid item lg={2} md={2} sm={4} xs={4}>
                                <img src={b6} alt="" style={{ width: "100%", borderRadius: "10px" }} />

                            </Grid>
                        </Grid>
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
                            mt: "30px",
                            textTransform:"capitalize"

                        }}>
                            See More Photo
                        </Button>
                    </Box>
                </Box>


            </Container>
        </Box>
    )
}

export default Instagram