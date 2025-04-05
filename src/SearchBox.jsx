import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="173a9ec92eb89930b24525d30ebedf23"

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            let result={
                city:city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                windSpeed:jsonResponse.wind.speed,
                weather:jsonResponse.weather[0].description,
                feelsLike:jsonResponse.main.feels_like,
            }
            console.log(result);
            return result;
        }catch(err){
            throw err; 
        }
    };

    let handleChange=(event)=>{
        setCity(event.target.value);
        setError(false);
    }

    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            if(!city.trim()) return;
            let newinfo=await getWeatherInfo();
            updateInfo(newinfo);
            setCity("");
        }catch(err){
            setError(true);
        }
    }
    
    return (
        <Box className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="Enter City Name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange}
                    size="medium"
                    InputProps={{
                        style: {
                            fontSize: '1.1rem'
                        }
                    }}
                />
                <Button 
                    variant="contained" 
                    type='submit'
                    color="primary"
                    startIcon={<SearchIcon />}
                    sx={{ mt: 2 }}
                >
                    Get Weather
                </Button>
                {error && <p className="error-message">No such place exists. Please try another location.</p>}
            </form>
        </Box>
    );
}