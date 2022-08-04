import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const SampleComponent = () => {
  return (
    <View style={{borderWidth: 1}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
          marginTop: 16,
        }}>
        SampleComponent
      </Text>
      <View style={{width: 80, height: 80, backgroundColor: '#264653'}} />
      <Text>Arief</Text>
      <Text>Aryudi</Text>
      <Text>Syidik</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/any'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'red', fontSize: 24}}>Image Animal</Text>
      </View>
    );
  }
}

export default SampleComponent;
