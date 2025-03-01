import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import lemon from "../assets/lemon.png";
import mango from "../assets/mango.png";
// import Item from './Item';

const DATA = [
    { text: "1234", icon: lemon },
    { text: "lemon", icon: mango },
    { text: "mango", icon: lemon },
    { text: "456", icon: mango },
    { text: "Mohamed", icon: lemon },
    { text: "apple", icon: lemon },
    { text: "banana", icon: mango },
    { text: "orange", icon: lemon },
    { text: "grape", icon: mango },
    { text: "watermelon", icon: lemon },    
];

const Item = ({text, iconSrc}) => (
  <View style={styles.item}>
    <Image source={iconSrc} style={styles.icon} />
    <Text style={styles.title}>{text}</Text>
  </View>
);

export default function SimpleFlatList() {
  return (
    
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.title}>App Using FlatListttttt</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item text={item.text} iconSrc={item.icon}/>}
        keyExtractor={item => item.text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    borderWidth: 1
  },
  title: {
    // paddingTop: 80,
    fontSize: 24,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
icon: {
  width: 30,
  height: 30,
  marginRight: 10,
},
  title: {
    fontSize: 32,
  },
});