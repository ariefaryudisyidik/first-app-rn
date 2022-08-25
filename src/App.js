import React from 'react';
import { LogBox } from 'react-native';
import LocalAPI from './pages/LocalAPI';

LogBox.ignoreLogs(['Remote debugger']);

function App() {
  return <LocalAPI />;
}

export default App;
