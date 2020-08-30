import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Forecast(props) {
    return (
    <View >
        <Text style={styles.text2}>{props.main}</Text>
        <Text style={styles.text2}>{props.description}</Text>
        <Text style={styles.text2}>{props.temp} °C</Text>
    </View>
    );
   }
const styles = StyleSheet.create({
    text2: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20
    }
})
   