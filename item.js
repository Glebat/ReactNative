import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Item = ({ lang, experience }) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: `https://img.icons8.com/color/96/000000/${lang.toLowerCase()}.png` }}
        style={styles.logo}
      />
      <View>
        <Text style={styles.langText}>{lang}</Text>
        <Text style={styles.experienceText}>Опыт: {experience} лет</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    
    padding: 1,
    borderBottomWidth: 12,
    borderBottomColor: '#ccc',
    borderRadius: 10 , 
    marginVertical: 5, 
    backgroundColor: '#E4E4E2',
    overflow: 'hidden',
  },
  logo: {
    width: 180,
    height: 180,
    marginRight: 5,
    
  },
  langText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop:20,
  },
  experienceText: {
    fontSize: 20,
    color: 'gray',
  },
});

export default Item;

