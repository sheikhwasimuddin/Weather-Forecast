import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return(
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Card sx={{ 
                maxWidth: 400, 
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.7)'
            }}>
                <CardMedia
                    sx={{ height: 200, borderRadius: '16px 16px 0 0' }}
                    image={info.humidity>80? RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
                    title={info.city}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        fontWeight: 'bold'
                    }}>
                        {info.city}
                        <Box sx={{ ml: 1 }}>
                            {info.humidity>80? 
                                <ThunderstormIcon fontSize="large" color="primary"/>:
                                info.temp>15?
                                <WbSunnyIcon fontSize="large" color="warning"/>:
                                <AcUnitIcon fontSize="large" color="info"/>
                            }
                        </Box>
                    </Typography>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(2, 1fr)', 
                        gap: 2,
                        textAlign: 'left'
                    }}>
                        <Typography variant="body1">
                            <strong>Temperature:</strong> {info.temp}&deg;C
                        </Typography>
                        <Typography variant="body1">
                            <strong>Feels Like:</strong> {info.feelsLike}&deg;C
                        </Typography>
                        <Typography variant="body1">
                            <strong>Humidity:</strong> {info.humidity}%
                        </Typography>
                        <Typography variant="body1">
                            <strong>Wind Speed:</strong> {info.windSpeed} km/h
                        </Typography>
                        <Typography variant="body1">
                            <strong>Max Temp:</strong> {info.tempMax}&deg;C
                        </Typography>
                        <Typography variant="body1">
                            <strong>Min Temp:</strong> {info.tempMin}&deg;C
                        </Typography>
                    </Box>
                    
                    <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                        <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
                            <strong>Weather:</strong> {info.weather}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}