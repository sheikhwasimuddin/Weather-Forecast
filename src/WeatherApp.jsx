import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 30.77,
        humidity: 89,
        temp: 27.05,
        tempMax: 27.05,
        tempMin: 27.05,
        weather: "mist",
        windSpeed: 2.06,
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }

    return (
        <Container maxWidth="md">
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2,color:"#000" }}>
                    Weather Forecast
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                    Get current weather conditions for any city worldwide
                </Typography>
            </Box>
            
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </Container>
    )
}