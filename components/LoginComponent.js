{/*   Daniel Constante Honors Project        */ }

import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { Input, CheckBox, Button, Icon } from 'react-native-elements';

const Login = ({ navigation, route }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [errortext, setErrortext] = useState('');

    let LoginDetails = {
        username: username,
        password: password,
        remember: remember
    }

    const handleLogin = () => {
        setErrortext('');
        if (!username) {
            Alert.alert('Please fill Email');
            return;
        }
        if (!password) {
            Alert.alert('Please fill Password');
            return;
        }
        console.log(JSON.stringify(LoginDetails));
        Alert.alert('Welcome Back!!!',
            username
        );
    }

    return (
        <ScrollView>
            <View>
                <Icon
                    style={styles.header}
                    name="arrow-back-ios"
                    size={28}
                    color='black'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.card_template}>
                <Image
                    style={styles.login}
                    source={require('./images/login.webp')}
                />
                <View style={styles.container}>
                    <Input
                        placeholder='Username'
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={(username) => setUsername(username)}
                        value={username}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                        returnKeyType="next"
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={{ type: 'font-awesome', name: 'key' }}
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <CheckBox
                        title='Remember Me'
                        center
                        checked={remember}
                        onPress={() => { setRemember(!remember) }}
                        containerStyle={styles.formCheckbox}
                    />
                    <View style={styles.formButton}>
                        <Button
                            onPress={handleLogin}
                            title='Login'
                            icon={
                                <Icon
                                    name='sign-in'
                                    type='font-awesome'
                                    color='#fff'
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            buttonStyle={{ backgroundColor: '#04555c' }}
                        />
                    </View>
                    <View style={styles.formButton}>
                        <Button
                            onPress={() => navigation.navigate('Register')}
                            title='Register'
                            type='clear'
                            icon={
                                <Icon
                                    name='user-plus'
                                    type='font-awesome'
                                    color='#04555c'
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            titleStyle={{ color: '#04555c' }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 10
    },
    header: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    login: {
        height: 220,
        width: 220,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 80,
        top: 20
    },
    formIcon: {
        marginRight: 10
    },
    formInput: {
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#04555c',
        top: 30,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        elevation: 12,
        marginTop: 10,
        marginBottom: 10
    },
    formCheckbox: {
        top: 30,
        margin: 8,
        backgroundColor: null
    },
    formButton: {
        top: 20,
        margin: 20,
        marginRight: 40,
        marginLeft: 40
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 10
    },
    image: {
        width: 60,
        height: 60
    },
    card_template: {
        width: 390,
        height: 695,
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: '#04555c',
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});

export default Login;