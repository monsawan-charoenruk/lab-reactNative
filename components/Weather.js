import React, { useState } from 'react';
import { Text, ImageBackground, StyleSheet} from 'react-native';
import Forecast from './Forcast';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Text style={styles.text1}>Zip Code is {props.zipCode}</Text>
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
        color: 'blue',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 25
    }

   })
   