import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './src/components/board';
import TopBar from './src/components/top-bar';
import BottomBar from './src/components/bottom-bar';

const App = () => {
  const [key, setKey] = useState(1)

  const onPress = () => {
    const newKey = key + 1;
    setKey(newKey);
  }

  return (
    <>
      <TopBar/>
      <Board key={key}/>
      <BottomBar onPress={onPress}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
