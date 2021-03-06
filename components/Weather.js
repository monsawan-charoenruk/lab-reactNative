import React, { useState, useEffect} from 'react';
import { Text, ImageBackground, StyleSheet} from 'react-native';
import Forecast from './Forcast';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        name: '-',
        temp: 0
    })    
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) { 
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=e49988416624b55008a002c797418b66`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    name: json.name,
                    temp: json.main.temp});
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
    

    return (
        <ImageBackground source={require('../black.jpg')} style={styles.backdrop}>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    )
   }
   
   const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    text1:{
        color: 'yellow',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 25
    }

   })
   