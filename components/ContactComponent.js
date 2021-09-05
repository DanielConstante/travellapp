{/*   Daniel Constante Honors Project        */ }

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

const Contact = ({ navigation }) => {

      const sendMail = () => {
            MailComposer.composeAsync({
                  recipients: ['reservations@discoverecuador.com'],
                  subject: 'Tour Inquiry',
                  body: 'To whom it may concern:'
            })
      }
      return (
            <ScrollView>
                  <Animatable.View
                        animation='fadeInDown'
                        duration={1000}
                        delay={1000}>
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
                              <View>
                                    <Text style={styles.textTitle}>
                                          Contact Information
                                    </Text>
                              </View>
                              <View>
                                    <Text style={styles.text}>
                                          1000 Aubrey Ln.
                                          {'\n'}Dallas, TX 76227 {'\n'}
                                          U.S.A.
                                    </Text>
                              </View>
                              <View style={styles.icon}>
                                    <Icon
                                          name='phone'
                                    />
                              </View>
                              <View>
                                    <Text style={styles.text}>
                                          1800-000-5148
                                    </Text>
                              </View>
                              <View style={styles.mail}>
                                    <Icon
                                          name='mail'
                                    />
                              </View>
                              <View>
                                    <Text style={styles.text} >
                                          reservations@discoverecuador.com
                                    </Text>
                              </View>
                              <Button
                                    title="Send Email"
                                    buttonStyle={{ backgroundColor: '#04555c', margin: 50, top: 20 }}
                                    icon={<Icon
                                          name='envelope-o'
                                          type='font-awesome'
                                          color='#fff'
                                          iconStyle={{ marginRight: 10 }}
                                    />}
                                    onPress={() => sendMail()}
                              />
                        </View>
                  </Animatable.View>
            </ScrollView >
      );
}

const styles = StyleSheet.create({
      header: {
            marginTop: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
      },
      card_template: {
            width: 390,
            height: 395,
            justifyContent: 'center',
            alignContent: 'center',
            borderColor: '#04555c',
            borderWidth: 3,
            borderRadius: 10,
            top: 130,
            marginTop: 15,
            marginLeft: 10,
            marginRight: 10
      },
      textTitle: {
            color: '#04555c',
            fontSize: 40,
            marginLeft: 20,
            top: 10
      },
      text: {
            fontSize: 20,
            textAlign: 'center',
            top: 30,
            marginTop: 5,
            marginBottom: 10
      },
      icon: {
            flexDirection: 'row',
            top: 62,
            marginLeft: 90
      },
      mail: {
            flexDirection: 'row',
            top: 62,
            marginLeft: 10
      },
});
export default Contact;