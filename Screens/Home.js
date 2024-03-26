import {
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    View,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  
  
  
  export default function Home({navigation}) {
    const [kullanicilar, setKullanicilar] = useState([]);
    const [araba, setAraba] = useState([]);
  
    useEffect(
      () =>
        fetch('https://myfakeapi.com/api/cars').then((resp) =>
          resp.json().then((json) => setAraba(json.cars))
        ),
      []
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={araba}
          style={{ width: '100%', alignItems: 'center' }}
          //horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Box arabalar={item} />}
        />
      </SafeAreaView>
    );
  }
  
  const Box = ({ arabalar }) => {
    return (
      <TouchableOpacity
        style={{
          height: 75,
          width: '90%',
          borderRadius: 25,
          backgroundColor: (arabalar.id%2==0?'#222831':'#9BB0C1'),
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          margin: 10,
          flexDirection: 'row',
        }}>
        <View style={{ alignItems: 'space-around',justifyContent:'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'small', color: 'white' }}>
            {arabalar.car} {arabalar.car_model} {arabalar.car_model_year}
          </Text>
          <Text style={{fontSize:10,fontWeight:'small',color:'black'}}>
            Araba Rengi:{arabalar.car_color}
          </Text>
          <Text style={{ fontSize:10, fontWeight:'bold',color:'black'}}>Fiyat:{arabalar.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
  });