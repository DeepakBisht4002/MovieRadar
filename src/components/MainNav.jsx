import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (value === 0) navigate("/")
        else if (value === 1) navigate("/movies")
        else if (value === 2) navigate("/series")
        else if (value === 3) navigate("/search")
    }, [value, navigate])

    return (
        <Box sx={{

        }}>
            <BottomNavigation
                sx={{
                    width: '100%',
                    position: 'fixed',
                    bottom: 0,
                    zIndex: 100,
                    backgroundColor: "#2d313a"
                }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction style={{ color: '#fff' }} label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction style={{ color: '#fff' }} label="Movies" icon={<MovieIcon />} />
                <BottomNavigationAction style={{ color: '#fff' }} label="Tv Series" icon={<TvOutlinedIcon />} />
                <BottomNavigationAction style={{ color: '#fff' }} label="Search" icon={<SearchOutlinedIcon />} />
            </BottomNavigation>
        </Box>
    );
}