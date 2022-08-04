import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import PropsDynamic from './pages/PropsDinamis';
// import Position from './pages/Position';
// import SampleComponent from './pages/SampleComponent';
// import StylingComponent from './pages/StylingComponent';

const App = () => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 6000);
  });

  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* <FlexBox /> */}
        <PropsDynamic />
        {/* <Position /> */}
      </ScrollView>
    </View>
  );
};

export default App;
