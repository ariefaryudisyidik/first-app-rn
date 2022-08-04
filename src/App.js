import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import BasicJavaScript from './pages/BasicJavaScript';
// import Communication from './pages/Communication';
// import Position from './pages/Position';
// import DynamicState from './pages/DynamicState';
// import SampleComponent from './pages/SampleComponent';

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
        {/* <Position /> */}
        {/* <DynamicProps /> */}
        {/* <DynamicState /> */}
        {/* <Communication /> */}
        <BasicJavaScript />
      </ScrollView>
    </View>
  );
};

export default App;
