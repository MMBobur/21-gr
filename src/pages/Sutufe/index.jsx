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
        <>
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
                            Wooden Toys
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
                                <img src={st5} alt="" className="st_img" />
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
                                    Happy Flower
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
                                <img src={st6} alt="" className="st_img" />
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
                                    Lift Machine
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
                                <img src={st7} alt="" className="st_img" />
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
                                    Wooden Camera
                                </Typography>
                                <Typography sx={{
                                    marginLeft: "25%",
                                    marginBottom: "20px"
                                }} className="st_a">$&nbsp;32.00&nbsp;USD</Typography>
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
                                <img src={st8} alt="" className="st_img" />
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
                                    Little Rabbit
                                </Typography>
                                <Typography sx={{
                                    marginLeft: "25%",
                                    marginBottom: "20px"
                                }} className="st_a">$&nbsp;16.00&nbsp;USD</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box className="wat_vi" sx={{
                display: "flex",
                padding: "120px 24px",
                alignItems: "center"
            }}>
                <Grid container alignItems="center" justifyContent="center" >
                    <Grid item xs={11} sm={9} md={8} lg={6} xl={6}>
                        <Box sx={{
                            width: "100%",
                            textAlign: "center",
                            justifyContent: "center"
                        }}>
                            <Typography sx={{
                                marginBottom: "16px",
                                color: "#fff",
                                fontSize: "13px",
                                lineHeight: "16px",
                                fontWeight: 400
                            }}>
                                About The Shop
                            </Typography>
                            <Typography variant="h2" sx={{
                                marginBottom: "16px",
                                color: "#fff",
                                fontSize: "36px",
                                lineHeight: "44px",
                                fontWeight: 400
                            }}>
                                Watch Our Story
                            </Typography>
                            <Typography sx={{
                                marginBottom: "28px",
                                color: "#fff",
                                fontSize: "14px",
                                lineHeight: "24px",
                            }}>
                                There is no magic formula to write perfect ad copy. It is based on a number of
                                factors, including ad placement,
                                demographic, even the consumer’s mood.
                            </Typography>
                            <Box sx={{
                                marginLeft: { xl: "43%", lg: "41%", md: "40%", sm: "40%", xs: "35%" }
                            }}>
                                <a href="#" className="wat_a">
                                    <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec4b504f1c4031af32_play-icon-white.svg" alt="" />
                                </a>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>

            </Box>
        </>
    )
}
export default Stuvet