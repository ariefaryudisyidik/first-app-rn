import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import DynamicState from './pages/DynamicState';
// import DynamicProps from './pages/DynamicProps';
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
        {/* <Position /> */}
        {/* <DynamicProps /> */}
        <DynamicState />
      </ScrollView>
    </View>
  );
};

export default App;
