import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
//import {Button} from 'react-native-paper';

//cogemos el anchi de la pantalla
const screenWidth = Dimensions.get('window').width;
//cogemos el alto de la pantalla
const screenHeight = Dimensions.get('window').height;

const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
  
];

const muestraImagenes = () => {
  images.map((imagen, index) => {
    return (
      <View key={index}>
        <Image style={styles.card} source={{uri: imagen}} />
      </View>
    );
  });
};

const localImg = require('./images/avatar.jpg');
//const localImg = require('https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop');
const AppAp6 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatarCard} source={localImg} />
        </View>

        <View style={styles.DatosUsuarioContainer}>
          <View style={styles.infoUsuario}>
            <View style={styles.postUsuarioContainer}>
              <Text style = {styles.post}>Post</Text>
              <Text style = {styles.post}>20</Text>
            </View>
            <View style={styles.postUsuarioContainer}>
              <Text style = {styles.post}>Followers</Text>
              <Text style = {styles.post}>110304</Text>
            </View>
            <View style={styles.postUsuarioContainer}>
              <Text style = {styles.post}>Following</Text>
              <Text style = {styles.post}>1103</Text>
            </View>
          </View>

          <View>
            <TouchableOpacity style={styles.buttonProfile}>
              <Text>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <ScrollView contentContainerStyle = {{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}>
        {images.map((imagen, index) => (
            <View key={index}>
              <Image style={styles.card} source={{uri: imagen}} />
            </View>            
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgray',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    flex: 3,
  },
  card: {
    //flex: 1,
    width: 100,
    height: 100,
    margin: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    fonctcolor: 'green',
    textAlign: 'center',
    margin: 20,
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
  },
  avatarCard: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  DatosUsuarioContainer: {
    flex: 2,
  },
  infoUsuario: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonProfile: {
    margin: 10,
    marginLeft: 35,
    marginRight: 35,
    backgroundColor: 'cyan',
    borderColor: 'grey',
    borderWidth: 1,
    padding: 4,
    alignItems: 'center',
  },

  postUsuarioContainer: {
    flex: 1,
    alignItems: 'center',
  },
  post: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default AppAp6;
