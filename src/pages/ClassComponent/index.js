import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class index extends Component {
  constructor(props) {
    super(props);
    console.log('==> constructor');
    this.state = {
      subscriber: 200,
    };
  }

  componentDidMount() {
    console.log('==> componentDidMount');
    setTimeout(() => {
      this.setState({ subscriber: 400 });
    }, 2000);
  }

  componentDidUpdate() {
    console.log('==> componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('==> componentWillUnmount');
  }

  render() {
    console.log('==> render');
    return (
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#f4a261',
            marginTop: 16,
          }}
        >
          FlexBox
        </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ backgroundColor: '#ee5253', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#1dd1a1', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#5f27cd', width: 50, height: 50 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <Image
            source={{
              uri: 'https://cdn-cdpl.sgp1.cdn.digitaloceanspaces.com/source/998b78e349061b4971c0a2b0e8d6be41/40890924-4bad5ce0-6732-11e8-9648-192aa71f0830.png',
            }}
            style={{ width: 100, height: 100, borderRadius: 50, marginRight: 16 }}
          />
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Arief Aryudi Syidik</Text>
            <Text>{this.state.subscriber} Subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}
