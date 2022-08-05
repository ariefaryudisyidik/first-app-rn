import React from 'react';
import {
  Image, StyleSheet, Text, View,
} from 'react-native';
import github from '../../assets/image/github.png';

function StylingComponent() {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#264653',
          borderWidth: 2,
          borderColor: '#f4a261',
          marginTop: 20,
          marginLeft: 20,
          marginBottom: 8,
        }}
      />
      <View
        style={{
          marginLeft: 20,
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}
      >
        <Image
          source={github}
          style={{ width: 188, height: 107, borderRadius: 8 }}
        />
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 16 }}>
          New MacBook Pro 2019
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
          }}
        >
          Rp. 25.000.000,-
        </Text>
        <Text style={{ fontSize: 12, fontWeight: '300', marginTop: 12 }}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}
          >
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f4a261',
    marginTop: 16,
  },
});

export default StylingComponent;
