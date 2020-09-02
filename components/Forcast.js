import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Forecast(props) {
    return (
    <View >
        <Text style={styles.text3}>{props.name}</Text>
        <Text style={styles.text2}>{props.main}</Text>
        <Text style={styles.text2}>{props.description} {props.temp} °C</Text>
    </View>
    );
   }
const styles = StyleSheet.create({
    text2: {
        color: 'yellow',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 10,
        fontWeight: 'bold',
    },
    text3: {
        fontSize: 36,
        paddingTop: 20,
        paddingBottom: 50,
        color: 'yellow',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})
   