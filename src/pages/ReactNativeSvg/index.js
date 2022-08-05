import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IllustrationMyApp from '../../assets/image/illustration_my_app.svg';

function ReactNativeSvg() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Menggunakan File SVG di dalam React Native</Text>
      <IllustrationMyApp width={244} height={125} />
    </View>
  );
}

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: { padding: 16 },
  textTitle: { textAlign: 'center' },
});
