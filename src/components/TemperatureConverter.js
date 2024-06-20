import TextField from '@mui/material/TextField';
import { useState } from 'react';



function TemperatureConverter() {
    const [inputCelcius, setInputCelcius] = useState('');
    const [inputFahrenheit, setInputFahrenheit] = useState('');
    const handleCelciusChange = ({target}) => {
        setInputCelcius(target.value);
        setInputFahrenheit((target.value * 9/5) + 32);
    };
    const handleFahrenheitChange = ({target}) => {
        setInputFahrenheit(target.value);
        setInputCelcius((target.value - 32) * 5/9);
    };
    return (
        <div>
            <h1>Temperature Converter</h1>
            <TextField onChange={handleCelciusChange} value={inputCelcius} id="celsius" label="Celsius" variant="filled" />
            <TextField onChange={handleFahrenheitChange} value={inputFahrenheit} id="fahrenheit" label="Fahrenheit" variant="filled" />
        </div>
    );
}



export default TemperatureConverter;