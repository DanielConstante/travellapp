{/*   Daniel Constante Honors Project        */}

import React from 'react';
import {
      ImageBackground, SafeAreaView, StatusBar, StyleSheet,
      View, Text, TouchableOpacity, Share
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';

const Details = ({ navigation, route }) => {

      const place = route.params;

      const [like, setLike] = useState(false);

      const markFavorite = () => {
            let localLiked = like;
            localLiked = !localLiked;
            setLike({ like: localLiked });
      }

      const shareDetails = (title, message, url) => {
            Share.share({
                  title: title,
                  message: `${title}: ${message} ${url}`,
                  url: url
            }, {
                  dialogTitle: 'Share ' + title
            });
      };

      return (
            <SafeAreaView style={{ flex: 1 }}>
                  <StatusBar
                        translucent
                        backgroundColor="rgba(0,0,0,0)"
                  />
                  <ImageBackground
                        style={{ flex: 0.7 }}
                        source={place.image}
                  >
                        <View style={style.header}>
                              <Icon
                                    name="arrow-back-ios"
                                    size={28}
                                    color='#fff'
                                    onPress={navigation.goBack}
                              />
                        </View>
                        <View style={style.imageDetails}>
                              <Text
                                    style={{
                                          width: '70%',
                                          fontSize: 30,
                                          fontWeight: 'bold',
                                          color: '#fff',
                                          marginBottom: 20,
                                    }}
                              >
                                    {place.name}
                              </Text>
                              <View style={{ flexDirection: 'row' }}>
                                    <Icon
                                          name="star"
                                          size={30}
                                          color='orange'
                                    />
                                    <Text
                                          style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
                                          5.0
                                    </Text>
                              </View>
                        </View>
                  </ImageBackground>
                  <View style={style.detailsContainer}>
                        <View style={style.iconContainer}>
                              <Icon
                                    name={!like ? 'favorite-border' : 'favorite'}
                                    color='red'
                                    size={30}
                                    onPress={() => like ? console.log('Already set as a favorite' + "\n" + place.name) : markFavorite()}
                              />
                        </View>
                        <View style={style.iconContainerShare}>
                              <Icon
                                    name="share"
                                    color='grey'
                                    size={30}
                                    onPress={() => shareDetails(place.name, place.details, place.image.uri)}
                              />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                              <Icon
                                    name="place"
                                    size={28}
                                    color='#04555c'
                              />
                              <Text
                                    style={{
                                          marginLeft: 5,
                                          fontSize: 20,
                                          fontWeight: 'bold',
                                          color: '#04555c',
                                    }}>
                                    {place.location}
                              </Text>
                        </View>
                        <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>
                              About the trip
                        </Text>
                        <Text style={{ marginTop: 20, lineHeight: 22 }}>
                              {place.details}
                        </Text>
                  </View>
                  <View style={style.footer}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                              <Text
                                    style={{
                                          fontSize: 18,
                                          fontWeight: 'bold',
                                          color: '#fff',
                                    }}>
                                    {place.price}
                              </Text>
                              <Text
                                    style={{
                                          fontSize: 12,
                                          fontWeight: 'bold',
                                          color: 'grey',
                                          marginLeft: 2,
                                    }}>
                                    /PER DAY
                              </Text>
                        </View>
                        <TouchableOpacity
                              activeOpacity={0.8}
                              onPress={() => navigation.navigate('Booking')}>
                              <View style={style.bookNowBtn}>
                                    <Text
                                          style={{ color: '#04555c', fontSize: 16, fontWeight: 'bold' }}>
                                          BookNow
                                    </Text>
                              </View>
                        </TouchableOpacity>
                  </View>
            </SafeAreaView>
      );
}

const style = StyleSheet.create({
      bookNowBtn: {
            height: 50,
            width: 150,
            backgroundColor: '#fff',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
      },
      iconContainer: {
            height: 60,
            width: 60,
            position: 'absolute',
            top: -30,
            backgroundColor: '#fff',
            borderRadius: 30,
            right: 20,
            elevation: 10,
            justifyContent: 'center',
            alignItems: 'center',
      },
      iconContainerShare: {
            height: 60,
            width: 60,
            position: 'absolute',
            top: -30,
            marginRight: 70,
            backgroundColor: '#fff',
            borderRadius: 30,
            right: 20,
            elevation: 10,
            justifyContent: 'center',
            alignItems: 'center',
      },
      detailsContainer: {
            top: -30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical: 40,
            paddingHorizontal: 20,
            backgroundColor: '#fff',
            flex: 0.3,
      },
      header: {
            marginTop: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
      },
      imageDetails: {
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            position: 'absolute',
            bottom: 30,
      },
      footer: {
            flexDirection: 'row',
            backgroundColor: '#04555c',
            height: 70,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
      },
});

export default Details;
