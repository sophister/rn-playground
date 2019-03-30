/**
 *
 * Created by Jess on 2019-03-28.
 */

'use strict';

import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Alert} from 'react-native';
import {NativeModules} from 'react-native';

const ImagePickerModule = NativeModules.ImagePickerModule;

class HelloWorld extends React.Component {

    pickImage = () => {
        ImagePickerModule.pickImage()
            .then( (result) => {
                Alert.alert('success', result);
                console.log(`pickImage result: `, result);
            } )
            .catch( (err) => {
                Alert.alert('error', err.message);
                console.error(err);
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hello}>Hello, 世界</Text>
                <Text style={styles.btn1} onPress={this.pickImage}>call native for result</Text>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    btn1: {
        padding: 20,
        borderWidth: 2,
        borderColor: 'green',
        fontSize: 24,
    }
});

AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);