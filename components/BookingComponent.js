{/*   Daniel Constante Honors Project        */}

import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Switch, Button, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';
import * as Notifications from 'expo-notifications';


class Booking extends Component {

    constructor(props) {
        super(props);

        this.state = {
            traveler: 1,
            days: 1,
            place: '',
            hikeIn: false,
            horseride: false,
            snorkeling: false,
            date: new Date(),
            showCalendar: false,
        };
    }

    handleReservation() {
        console.log(JSON.stringify(this.state));
        Alert.alert(
            'Begin Search?',
            'Number of Travelers:' + this.state.traveler + "\n" +
            'Days?' + this.state.days + "\n" +
            'Place' + this.state.place + "\n" +
            'Hike-In?' + this.state.hikeIn + "\n" +
            'Snorkeling?' + this.state.snorkeling + "\n" +
            'horseride?' + this.state.horseride + "\n" +

            'Date' + this.state.date,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                    onPress: () => this.resetForm()
                },
                {
                    text: 'Ok',
                    onPress: () => {
                        this.presentLocalNotification(this.state.date.toLocaleDateString('en-US'));
                        this.resetForm()
                    }
                }
            ],
            { cancelable: false }
        )
    }
    resetForm() {
        this.setState({
            traveler: 1,
            days: 1,
            place: '',
            hikeIn: false,
            horseride: false,
            snorkeling: false,
            date: new Date(),
            showCalendar: false,
        });
    }
    async presentLocalNotification(date) {
        function sendNotification() {
            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                    shouldShowAlert: true
                })
            });
            Notifications.scheduleNotificationAsync({
                content: {
                    sound: "chime.aiff",
                    title: 'Your tour to Ecuador has been confirmed',
                    body: `Search for ${date} requested,
                    'Number of Travelers:
                    'Days: 
                    'Place:
                    'Hike-In: 
                    'Snorkeling: 
                    'horseride?:`

                },
                trigger: null
            });
        }
        let permissions = await Notifications.getPermissionsAsync();
        if (!permissions.granted) {
            permissions = await Notifications.requestPermissionsAsync();
        }
        if (permissions.granted) {
            sendNotification();
        }
    }
    render() {
        return (
            <ScrollView>
                <Icon
                    style={styles.header}
                    name="arrow-back-ios"
                    size={28}
                    color='black'
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <View style={styles.card_template}>
                    <View>
                        <Text style={styles.booking}>Tour Booking</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Number of Travelers</Text>
                        <Picker
                            style={styles.picker}
                            itemStyle={styles.pickerItem}
                            selectedValue={this.state.traveler}
                            onValueChange={itemValue => this.setState({ traveler: itemValue })}
                        >
                            <Picker.Item label='1' value='1' />
                            <Picker.Item label='2' value='2' />
                            <Picker.Item label='3' value='3' />
                            <Picker.Item label='4' value='4' />
                            <Picker.Item label='5' value='5' />
                            <Picker.Item label='6' value='6' />
                        </Picker>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Number of Days</Text>
                        <Picker
                            style={styles.picker}
                            itemStyle={styles.pickerItem}
                            selectedValue={this.state.days}
                            onValueChange={itemValue => this.setState({ days: itemValue })}
                        >
                            <Picker.Item label='1' value='1' />
                            <Picker.Item label='2' value='2' />
                            <Picker.Item label='3' value='3' />
                            <Picker.Item label='4' value='4' />
                            <Picker.Item label='5' value='5' />
                            <Picker.Item label='6' value='6' />
                        </Picker>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Pick Place</Text>
                        <Picker
                            style={styles.picker}
                            itemStyle={styles.itemPlace}
                            selectedValue={this.state.place}
                            onValueChange={itemValue => this.setState({ place: itemValue })}
                        >
                            <Picker.Item label='Galapagos' value='Galapagos' />
                            <Picker.Item label='Mitad del Mundo' value='Mitad del Mundo' />
                            <Picker.Item label='Quito' value='Quito' />
                            <Picker.Item label='Guayaquil' value='Guayaquil' />
                            <Picker.Item label='Cuenca' value='Cuenca' />
                            <Picker.Item label='Montanita' value='Montanita' />
                        </Picker>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Hike- In?</Text>
                        <Switch
                            style={styles.item}
                            value={this.state.hikeIn}
                            trackColor={{ true: '#04555c', false: null }}
                            onValueChange={value => this.setState({ hikeIn: value })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Snorkeling?</Text>
                        <Switch
                            style={styles.item}
                            value={this.state.snorkeling}
                            trackColor={{ true: '#04555c', false: null }}
                            onValueChange={value => this.setState({ snorkeling: value })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Horse Ride?</Text>
                        <Switch
                            style={styles.item}
                            value={this.state.horseride}
                            trackColor={{ true: '#04555c', false: null }}
                            onValueChange={value => this.setState({ horseride: value })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Date</Text>
                        <Button
                            onPress={() =>
                                this.setState({ showCalendar: !this.state.showCalendar })
                            }
                            title={this.state.date.toLocaleDateString('en-US')}
                            color='#04555c'
                            accessibilityLabel='Tap me to select a reservation date'
                        />
                    </View>
                    {this.state.showCalendar && (
                        <DateTimePicker
                            value={this.state.date}
                            mode={'date'}
                            display='default'
                            onChange={(event, selectedDate) => {
                                selectedDate && this.setState({ date: selectedDate, showCalendar: false })
                            }}
                            style={styles.inputContainer}
                        />
                    )}
                    <View style={styles.btn}>
                        <Button
                            onPress={() => this.handleReservation()}
                            title='Search'
                            color='#fff'
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    picker: {
        width: '50%',
        height: 44,
    },
    pickerItem: {
        height: 44
    },
    booking: {
        color: '#04555c',
        fontSize: 30,
        fontWeight: 'bold',
        alignContent: 'center',
        textAlign: 'center',
        top: 105
    },
    header: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    inputContainer: {
        height: 60,
        width: 365,
        backgroundColor: '#fff',
        borderRadius: 10,
        top: 110,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        elevation: 12,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10
    },
    btn: {
        flexDirection: 'row',
        height: 50,
        width: 120,
        backgroundColor: '#04555c',
        top: 20,
        marginTop: 100,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 150,
    },
    label: {
        fontSize: 18,
        flex: 2
    },
    item: {
        flex: 1
    },
    itemPlace: {
        flex: 2,
        width: 200,
        marginLeft: -20
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

});

export default Booking;