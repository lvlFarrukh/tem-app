import { H1 } from 'native-base';
import React from 'react'
import { View, Image, StyleSheet } from "react-native";

const AppHeader = () => {
    return (
        <View style={styles.topStartup}>
            <H1 style={{
                color: 'red',
                fontWeight: 'bold',
                textAlign: 'center',
                margin: 50,
                fontSize: 30
            }}>
                DONATE BLOOD
            </H1>
        </View>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    topStartup: {
        height: 150,
        marginBottom: 10,
        backgroundColor: 'gray',
    },
    topImg: {
        height: 130,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: 15,
    },
})