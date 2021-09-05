{/*   Daniel Constante Honors Project        */ }

import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Notification = ({ navigation }) => {

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
                  <View>
                        <Text style={styles.text}>This is where you can view notifications</Text>
                  </View>
            </ScrollView>
      );
}

const styles = StyleSheet.create({
      header: {
            marginTop: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
      },
      text: {
            fontSize: 20,
            alignContent: 'center',
            textAlign: 'center',
            marginTop: 20
      },
});

export default Notification;

