{/*   Daniel Constante Honors Project        */}

import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

class Loader extends Component {
    state = { animating: true}

    closeActivityIndicator = () => setTimeout(() => this.setState({
        animating: false
    }), 2000)

    componentDidMount = () => this.closeActivityIndicator()
    render() {

        const animating = this.state.animating

        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={animating}
                    color='#04555c'
                    size="large"
                    style={styles.activityIndicator}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 350
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    }
})

export default Loader;






