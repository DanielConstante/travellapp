import React from 'react';
import {
      SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text,
      TextInput, ImageBackground, FlatList, Dimensions,
      TouchableOpacity, Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SocialIcon } from 'react-native-elements'
import { places } from '../shared/places';
import { recommended } from '../shared/recommended';
import Loader from './LoaderComponent'

const { width } = Dimensions.get('screen');

const Home = ({ navigation }) => {

      const categoryIcons = [
            <Icon
                  name="flight"
                  size={25}
                  color='#04555c'
                  onPress={() => Linking.openURL
                        ('https://www.cheapflights.com/horizon/sem/flights/region/u70?lang=en&skipapp=true&gclid=CjwKCAjwmqKJBhAWEiwAMvGt6LaPN9IKMYPb0vRsZP1BPQ1QYBukSi3Mn_XsNoWHRlvGL80aIMaU3hoCfhMQAvD_BwE&aid=123021539671')}
            />,
            <Icon
                  name="hotel"
                  size={25}
                  color='#04555c'
                  onPress={() => Linking.openURL
                        ('https://www.trivago.com/quito-443275/hotel?sem_creativeid=319624088871&sem_network=g&sem_device=c&sem_target=&sem_adposition=&sem_campaignid=430483469&sem_adgroupid=24653446589&sem_targetid=dsa-107553304851&sem_location=9027296&bIsSeoPage=1&cipc=sem&cip=11131&gclid=CjwKCAjwmqKJBhAWEiwAMvGt6Ewp5COhWP98rULBMDmnWakcYirP9dMKDdVQc0g6a6bLq7VpjbIIExoC-hUQAvD_BwE')}
            />,
            <Icon
                  name="beach-access"
                  size={25}
                  color='#04555c'
                  onPress={() => Linking.openURL
                        ('https://www.planetware.com/ecuador/top-rated-beaches-in-ecuador-ecu-1-3.htm')}
            />,
            <Icon
                  name="fastfood"
                  size={25}
                  color='#04555c'
                  onPress={() => Linking.openURL
                        ('https://quitotourbus.com/en/traditional-foods-of-ecuador-9-dishes-you-must-try-on-your-trip/blog')}
            />,
      ];

      const ListCategories = () => {
            return (
                  <View style={style.categoryContainer}>
                        {categoryIcons.map((icon, index) => (
                              <View key={index} style={style.iconContainer}>
                                    {icon}
                              </View>
                        ))}
                  </View>
            );
      };

      const Card = ({ place }) => {
            return (
                  <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Details', place)}>
                        <ImageBackground
                              style={style.cardImage}
                              source={place.image}>
                              <Text
                                    style={{
                                          color: '#fff',
                                          fontSize: 20,
                                          fontWeight: 'bold',
                                          marginTop: 10,
                                    }}>
                                    {place.name}
                              </Text>
                              <View
                                    style={{
                                          flex: 1,
                                          justifyContent: 'space-between',
                                          flexDirection: 'row',
                                          alignItems: 'flex-end',
                                    }}>
                                    <View
                                          style={{ flexDirection: 'row' }}>
                                          <Icon
                                                name="place"
                                                size={25}
                                                color='orange'
                                          />
                                          <Text style={{ marginLeft: 2, top: 3, color: '#fff', fontWeight: '800' }}>
                                                {place.location}
                                          </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                          <Icon
                                                name="star"
                                                size={20}
                                                color='yellow'
                                          />
                                          <Text style={{ marginLeft: 5, color: '#fff' }}>
                                                5.0
                                          </Text>
                                    </View>
                              </View>
                        </ImageBackground>
                  </TouchableOpacity>
            );
      };

      const RecommendedCard = ({ place }) => {
            return (
                  <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Details', place)}>
                        <ImageBackground
                              style={style.rmCardImage}
                              source={place.image}>
                              <Text
                                    style={{
                                          color: '#fff',
                                          fontSize: 22,
                                          fontWeight: 'bold',
                                          marginTop: 10,
                                    }}>
                                    {place.name}
                              </Text>
                              <View
                                    style={{
                                          flex: 1,
                                          justifyContent: 'space-between',
                                          alignItems: 'flex-end',
                                    }}>
                                    <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
                                          <View style={{ flexDirection: 'row' }}>
                                                <Icon
                                                      name="place"
                                                      size={22}
                                                      color='orange'
                                                />
                                                <Text style={{ color: '#fff', marginLeft: 2, top: 2, fontWeight: '800' }}>
                                                      {place.location}
                                                </Text>
                                          </View>
                                          <View style={{ flexDirection: 'row' }}>
                                                <Icon
                                                      name="star"
                                                      size={22}
                                                      color='yellow'
                                                      style={{ marginLeft: 140 }}
                                                />
                                                <Text style={{ color: '#fff', marginLeft: 5 }}>
                                                      5.0
                                                </Text>
                                          </View>
                                    </View>
                                    <Text style={{ color: '#fff', fontSize: 13 }}>
                                          {place.details}
                                    </Text>
                              </View>
                        </ImageBackground>
                  </TouchableOpacity>
            );
      };

      return (

            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                  <Loader />
                  <StatusBar
                        translucent={false}
                        backgroundColor='#04555c' />
                  <View style={style.header}>
                        <Icon
                              name="notifications-none"
                              size={28}
                              color='#fff'
                              onPress={() => navigation.navigate('Notification')}
                        />
                        <Icon
                              name="mail"
                              size={28}
                              color='#fff'
                              onPress={() => navigation.navigate('Contact')}
                        />
                        <Icon
                              name="edit"
                              size={28}
                              color='#fff'
                              onPress={() => navigation.navigate('Booking')}
                        />
                        <Icon
                              name='person'
                              size={28}
                              color='#fff'
                              onPress={() => navigation.navigate('Login')}
                        />
                  </View>
                  <ScrollView showsVerticalScrollIndicator={false}>
                        <View
                              style={{
                                    backgroundColor: '#04555c',
                                    height: 120,
                                    paddingHorizontal: 20,
                              }}>
                              <View style={{ flex: 1 }}>
                                    <Text style={style.headerTitle}>Explore the</Text>
                                    <Text style={style.headerTitle}>beautiful places</Text>
                                    <View style={style.inputContainer}>
                                          <Icon
                                                name="search"
                                                size={28}
                                          />
                                          <TextInput
                                                placeholder="Search place"
                                                style={{ color: 'grey' }}
                                          />
                                    </View>
                              </View>
                        </View>
                        <ListCategories />
                        <Text style={style.sectionTitle}>Places</Text>
                        <View>
                              <FlatList
                                    contentContainerStyle={{ paddingLeft: 20 }}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={places}
                                    renderItem={({ item }) => <Card place={item} />}
                              />
                              <Text style={style.sectionTitle}>Recommended</Text>
                              <FlatList
                                    snapToInterval={width - 20}
                                    contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    data={recommended}
                                    renderItem={({ item }) => <RecommendedCard place={item} />}
                              />
                        </View>
                        <View style={style.footer}>
                              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 20, }}>
                                    <SocialIcon
                                          type='facebook'
                                          light
                                    />
                                    <SocialIcon
                                          type='instagram'
                                          light
                                    />
                                    <SocialIcon
                                          type='twitter'
                                          light
                                    />
                                    <SocialIcon
                                          type='youtube'
                                          light
                                    />
                                    <SocialIcon
                                          type='whatsapp'
                                          light
                                    />
                              </View>
                        </View>
                  </ScrollView>
            </SafeAreaView>
      );
};
const style = StyleSheet.create({
      header: {
            paddingVertical: 20,
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#04555c',
      },
      headerTitle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 23,
      },
      inputContainer: {
            height: 60,
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'grey',
            position: 'absolute',
            top: 90,
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
            elevation: 12,
      },
      categoryContainer: {
            marginTop: 60,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
      },
      iconContainer: {
            height: 60,
            width: 60,
            backgroundColor: '#e1e8e9',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
      },
      sectionTitle: {
            marginHorizontal: 20,
            marginVertical: 20,
            fontWeight: 'bold',
            fontSize: 20,
      },
      cardImage: {
            height: 220,
            width: width / 2,
            marginRight: 20,
            padding: 10,
            overflow: 'hidden',
            borderRadius: 10,
      },
      rmCardImage: {
            width: width - 40,
            height: 200,
            marginRight: 20,
            borderRadius: 10,
            overflow: 'hidden',
            padding: 10,
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
export default Home;
