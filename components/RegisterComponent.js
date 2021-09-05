{/*   Daniel Constante Honors Project        */ }

import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Alert } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import * as Notifications from 'expo-notifications';

const Register = ({ navigation }) => {

      const [name, setName] = useState('');
      const [middleName, setMiddleName] = useState('');
      const [lastName, setLastName] = useState('');
      const [birthday, setBirthday] = useState('')
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');
      const [date, setDate] = useState(new Date());
      const [errortext, setErrortext] = useState('');

      const resetForm = () => {
            ({
                  name: setName(''),
                  middleName: setMiddleName(''),
                  lastName: setLastName(''),
                  birthday: setBirthday(''),
                  username: setUsername(''),
                  password: setPassword(''),
                  phoneNumber: setPhoneNumber(''),
            });
      }

      let RegisterDetails = {
            name: name,
            middleName: middleName,
            lastName: lastName,
            birthday: birthday,
            username: username,
            password: password,
            phoneNumber: password,
            date: date

      }

      const handleRegister = () => {
            setErrortext('');
            if (!name) {
                  Alert.alert('Please fill first Name');
                  return;
            }
            if (!middleName) {
                  Alert.alert('Please fill Middle Name');
                  return;
            }
            if (!lastName) {
                  Alert.alert('Please fill Last Name');
                  return;
            }
            if (!birthday) {
                  Alert.alert('Please fill Birhtday');
                  return;
            }
            if (!username) {
                  Alert.alert('Please fill Email');
                  return;
            }
            if (!password) {
                  Alert.alert('Please fill Password');
                  return;
            }
            if (!phoneNumber) {
                  Alert.alert('Please fill PhoneNumber');
                  return;
            }
            console.log(JSON.stringify(RegisterDetails));
            Alert.alert(
                  'You have registered successfully',
                  'Username' + username + "\n" +
                  'Passsword' + '*********',
                  [
                        {
                              text: 'Cancel',
                              style: 'cancel',
                              onPress: () => this.resetForm()
                        },
                        {
                              text: 'Ok',
                              onPress: () => {
                                    presentLocalNotification(date.toLocaleDateString('en-US'));
                                    resetForm()
                              }
                        }
                  ],
                  { cancelable: false }
            )
      }

      const presentLocalNotification = async (date) => {
            function sendNotification() {
                  Notifications.setNotificationHandler({
                        handleNotification: async () => ({
                              shouldShowAlert: true
                        })
                  });
                  Notifications.scheduleNotificationAsync({
                        content: {
                              title: 'You have registered successfully!!!',
                              body: `Registration details for  
                              Name: ${name}
                              Mname: ${middleName}
                              Lastname: ${lastName}
                              Birthday: ${birthday}
                              Username: ${username}
                              Password:  *********
                              PhoneNumber: ${phoneNumber}
                              Date: ${date}`,
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

      return (
            <ScrollView>
                  <View>
                        <Icon
                              style={styles.header}
                              name="arrow-back-ios"
                              size={28}
                              color='black'
                              onPress={() => navigation.navigate('Login')}
                        />
                  </View>
                  <View style={styles.card_template}>
                        <View>
                              <Text style={styles.register}>Registration</Text>
                        </View>
                        <View style={styles.container}>
                              <Text style={styles.label}>First Name</Text>
                              <Input
                                    placeholder='First Name'
                                    onChangeText={(name) => setName(name)}
                                    value={name}
                                    containerStyle={styles.formInput}
                                    leftIconContainerStyle={styles.formIcon}
                              />
                              <Text style={styles.label}>Middle Name</Text>
                              <Input
                                    placeholder='Middle Name'
                                    onChangeText={(middleName) => setMiddleName(middleName)}
                                    value={middleName}
                                    containerStyle={styles.formInput}
                                    leftIconContainerStyle={styles.formIcon}
                              />
                              <Text style={styles.label}>Last Name</Text>
                              <Input
                                    placeholder='Last Name'
                                    onChangeText={(lastName) => setLastName(lastName)}
                                    value={lastName}
                                    containerStyle={styles.formInput}
                                    leftIconContainerStyle={styles.formIcon}
                              />
                              <Text style={styles.label}>Birthday</Text>
                              <Input
                                    placeholder='Birthday DD/MM/YYYY'
                                    onChangeText={(birthday) => setBirthday(birthday)}
                                    value={birthday}
                                    containerStyle={styles.formInput}
                                    leftIconContainerStyle={styles.formIcon}
                              />
                              <Text style={styles.label}>Email</Text>
                              <Input
                                    placeholder='Email'
                                    onChangeText={(username) => setUsername(username)}
                                    value={username}
                                    containerStyle={styles.formInput}
                                    leftIconContainerStyle={styles.formIcon}
                              />
                              <Text style={styles.label}>Password</Text>
                              <Input
                                    placeholder='Password'
                                    onChangeText={(password) => setPassword(password)}
                                    value={password}
                                    containerStyle={styles.formInput}
                                    leftIconContainerStyle={styles.formIcon}
                              />
                              <Text style={styles.label}>Phone Number</Text>
                              <Input
                                    placeholder='Phone Number'
                                    onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                                    value={phoneNumber}
                                    containerStyle={styles.formInput}
                                    leftIconContainerStyle={styles.formIcon}
                              />
                              <View style={styles.formButton}>
                                    <Button
                                          onPress={handleRegister}
                                          title='Register'
                                          type='clear'
                                          titleStyle={{ color: '#fff', marginLeft: -20 }}
                                          buttonStyle={{ backgroundColor: '#04555c', }}
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
      register: {
            color: '#04555c',
            fontSize: 30,
            fontWeight: 'bold',
            alignContent: 'center',
            textAlign: 'center',
            top: 20
      },
      label: {
            fontSize: 18,
            marginLeft: 3,
            top: 15
      },
      formInput: {
            height: 50,
            backgroundColor: '#fff',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#04555c',
            top: 10,
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
            elevation: 12,
            marginTop: 10,
            marginBottom: 10
      },
      formButton: {
            top: 0,
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
            height: 755,
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

export default Register;