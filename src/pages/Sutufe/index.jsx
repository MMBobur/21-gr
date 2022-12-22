import React from "react";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import st1 from "./img/st1.png"
import st2 from "./img/st2.png"
import st3 from "./img/st3.png"
import st4 from "./img/st4.png"
import st5 from "./img/st5.png"
import st6 from "./img/st6.png"
import st7 from "./img/st7.png"
import st8 from "./img/st8.png"
import "./style.css"

function Stuvet() {
    return (
        <Box sx={{
            backgroundColor: "#f8f8f8",
            paddingBottom: "80px"
        }}>
            <Grid container alignItems="center" justifyContent="center" >
                <Grid item xs={5.5} sm={5.7} md={5.5} lg={5} xl={4.6}>
                    <Typography variant="h3" sx={{
                        fontFamily: "'Varela Round', sans-serif",
                        fontSize: "28px",
                        lineHeight: "36px",
                        fontWeight: 400,
                    }}>
                        Stuffed Animals
                    </Typography>
                </Grid>
                <Grid item xs={5.5} sm={5.7} md={5.5} lg={5} xl={4.6} sx={{ textAlign: "end" }}>
                    <a href="#" class="link arrow-link">See All Toys</a>
                </Grid>
                <Grid item xs={11} sm={11.4} md={11} lg={10} xl={9.2}>
                    <Box sx={{
                        width: "100%",
                        height: "2px",
                        marginTop: "32px",
                        backgroundColor: "#e5e5e5",
                        marginBottom: "40px"
                    }}>
                        <Typography sx={{
                            width: "136px",
                            height: "100%",
                            backgroundColor: "#a5c926",
                        }}>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="center" spacing={4}>
                <Grid item xs={11} sm={5.7} md={3} lg={2.5} xl={2.3}>
                    <Box className="st_link">
                        <Box sx={{
                            width: "80%",
                            height: "200px",
                            marginBottom: "16px",
                            padding: "20px 20px 20px 20px",
                        }}>
                            <img src={st1} alt="" className="st_img" />
                        </Box>
                        <Box sx={{
                            marginTop: "0px",

                        }}>
                            <Typography variant="h6" sx={{
                                marginBottom: "12px",
                                color: "#111",
                                fontSize: "15px",
                                lineHeight: "20px",
                                fontWeight: 400
                            }}>
                                Teddy Bear
                            </Typography>
                            <Typography sx={{
                                marginLeft: "25%",
                                marginBottom: "20px"
                            }} className="st_a">$&nbsp;30.00&nbsp;USD</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={11} sm={5.7} md={3} lg={2.5} xl={2.3}>
                    <Box className="st_link">
                        <Box sx={{
                            width: "80%",
                            height: "200px",
                            marginBottom: "16px",
                            padding: "20px 20px 20px 20px",
                        }}>
                            <img src={st2} alt="" className="st_img" />
                        </Box>
                        <Box sx={{
                            marginTop: "10px",

                        }}>
                            <Typography variant="h6" sx={{
                                marginBottom: "12px",
                                color: "#111",
                                fontSize: "15px",
                                lineHeight: "20px",
                                fontWeight: 400
                            }}>
                                Mega Plush Toy
                            </Typography>
                            <Typography sx={{
                                marginLeft: "25%",
                                marginBottom: "20px"
                            }} className="st_a">$&nbsp;38.00&nbsp;USD</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={11} sm={5.7} md={3} lg={2.5} xl={2.3}>
                    <Box className="st_link">
                        <Box sx={{
                            width: "80%",
                            height: "200px",
                            marginBottom: "16px",
                            padding: "20px 20px 20px 20px",
                        }}>
                            <img src={st3} alt="" className="st_img" />
                        </Box>
                        <Box sx={{
                            marginTop: "10px",

                        }}>
                            <Typography variant="h6" sx={{
                                marginBottom: "12px",
                                color: "#111",
                                fontSize: "15px",
                                lineHeight: "20px",
                                fontWeight: 400
                            }}>
                                Cute Dog
                            </Typography>
                            <Typography sx={{
                                marginLeft: "25%",
                                marginBottom: "20px"
                            }} className="st_a">$&nbsp;24.00&nbsp;USD</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={11} sm={5.7} md={3} lg={2.5} xl={2.3}>
                    <Box className="st_link">
                        <Box sx={{
                            width: "80%",
                            height: "200px",
                            marginBottom: "16px",
                            padding: "20px 20px 20px 20px",
                        }}>
                            <img src={st4} alt="" className="st_img" />
                        </Box>
                        <Box sx={{
                            marginTop: "10px",

                        }}>
                            <Typography variant="h6" sx={{
                                marginBottom: "12px",
                                color: "#111",
                                fontSize: "15px",
                                lineHeight: "20px",
                                fontWeight: 400
                            }}>
                                Little Friend
                            </Typography>
                            <Typography sx={{
                                marginLeft: "25%",
                                marginBottom: "20px"
                            }} className="st_a">$&nbsp;27.00&nbsp;USD</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}
export default Stuvet