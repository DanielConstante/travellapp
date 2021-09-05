{/*   Daniel Constante Honors Project        */ }

import React from 'react';
import {
  View, StyleSheet, ImageBackground, StatusBar, Text,
  TouchableOpacity
} from 'react-native';

const OnBoardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{ flex: 1 }}
        source={require('./images/amazon.jpg')}>
        <View style={style.details}>
          <Text style={style.textTitle}>
            Discover
          </Text>
          <Text style={style.textTitle}>
            Ecuador with us
          </Text>
          <Text style={style.textContent}>
            Discover Ecuador on an unforgettable journey from the tropical Amazon rainforest to the wildlife-rich Galapagos Islands.
            Touch down in Quito, the historic Andean capital, before exploring the amazing beach in Salinas.
            You can select San Cristobal or Santa Cruz as your gateway to the Galapagos Islands as you search for blue-footed boobies
            and sea turtles, before ending your adventure in Cotopaxi Volcano.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Home')}>
            <View style={style.btn}>
              <Text style={{ fontWeight: 'bold' }}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  textTitle: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    top: -60
  },
  textContent: {
    color: '#fff',
    lineHeight: 25,
    marginTop: 15,
    top: -60

  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: '#fff',
    top: -60,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnBoardScreen;
