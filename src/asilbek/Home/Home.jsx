import './Home.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function Home() {
    return (
        <Box id='Home'>
            <Box>
                <Box id='hometrot'>
                    <Box>
                        <Typography id='homeyoz1'>
                            Say Hello to ToyStore!
                        </Typography>
                        <Typography id='homeyoz2'>
                            Free Ecommerce Template for Webflow
                        </Typography>
                        <Link id='homeyoz3'>
                            Open Catalog
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Home;