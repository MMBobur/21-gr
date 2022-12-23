import './Animals.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AnimalsImg1 from '../img/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png'
import AnimalsImg2 from '../img/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png'

function Animals() {
    return (
        <Box sx={{
            backgroundColor: '#f8f8f8',
            padding: { xl: '120px 175px', lg: '120px 50px', md: '120px 40px', sm: '88px 8px', xs: '88px 8px' },
            width: '100%'
        }}>
            <Box>
                <Box sx={{
                    display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'block', xs: 'block' },
                    justifyContent: 'center'
                }}>
                    <Box sx={{
                        width: { xl: '100%', lg: '100%', md: '100%', sm: '467px' },
                        backgroundColor: '#ffc12c',
                        display: 'flex',
                        padding: '48px 40px',
                        marginRight: "15px",
                        borderRadius: '16px',
                        marginLeft: { xl: '0%', lg: '0%', md: '0%', sm: '20%', },
                        height: { xl: 'auto', lg: 'auto', md: 'auto', sm: 'auto', xs: '355px' }
                    }}>
                        <Typography sx={{
                            width: { xl: '220px', lg: '220px', md: '220px', sm: '176px', xs: '62%' },
                            position: 'absolute',
                            marginTop: { lg: '-100px', md: '-70px', sm: '-80px', xs: '-100px' },
                            marginLeft: { xl: '0px', lg: '0px', md: '-25px', sm: '-40px', xs: '5%' }
                        }}>
                            <img src={AnimalsImg1} alt="" width={'100%'} />
                        </Typography>
                        <Box sx={{
                            marginLeft: { xl: '220px', lg: '220px', md: '220px', sm: '160px' },
                            marginTop: { xl: '0%', lg: '0%', md: '0%', sm: '0%', xs: '180px' },
                            display: 'flex',
                            justifyContent: { xl: 'start', lg: 'start', md: 'start', sm: 'start', xs: 'center' },
                            width: '100%'
                        }}>
                            <Box>
                                <Typography id='AniYoz1'>
                                    Stuffed Animals
                                </Typography>
                                <Link id='AniYoz2'>
                                    Shop Now
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: { xl: '100%', lg: '100%', md: '100%', sm: '467px' },
                        backgroundColor: '#fb416b',
                        display: 'flex',
                        padding: '48px 40px',
                        marginLeft: { xl: '15px', lg: '15px', md: '15px', sm: '20%', },
                        borderRadius: '16px',
                        marginTop: { lg: '-0px', md: '0px', sm: '64px', xs: '80px' },
                        height: { xl: 'auto', lg: 'auto', md: 'auto', sm: 'auto', xs: '264px' }
                    }}>
                        <Box sx={{
                            marginLeft: {xl:'30px',lg:'30px',md:'30px',sm:'30px',xs:'0px'},
                            width: { lg: '50%', md: '40%', sm: '48%', xs: '100%' },
                            textAlign: 'right',
                            marginTop: { xl: '0%', lg: '0%', md: '0%', sm: '0%', xs: '80px' },
                            display: 'flex',
                            justifyContent: { xl: 'start', lg: 'start', md: 'start', sm: 'start', xs: 'center' },
                        }}>
                            <Box>
                                <Typography id='AniYoz1'>
                                    Wooden Toys
                                </Typography>
                                <Link id='AniYoz22'>
                                    Shop Now
                                </Link>
                            </Box>
                        </Box>
                        <Typography sx={{
                            width: { xl: '220px', lg: '220px', md: '220px', sm: '176px', xs: '176px' },
                            position: 'absolute',
                            marginTop: { lg: '-100px', md: '-60px', sm: '-70px', xs: '-100px' },
                            marginLeft: { xl: '290px', lg: '290px', md: '180px', sm: '230px', xs: '20%' }
                        }}>
                            <img src={AnimalsImg2} alt="" width={'100%'} />
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Animals;