import React from 'react';
import { ScrollView, View } from 'react-native';
import LocalAPI from './pages/LocalAPI';

function App() {
  return (
    <View>
      <ScrollView>
        <LocalAPI />
      </ScrollView>
    </View>
  );
}

export default App;
