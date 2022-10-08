import {
  Button,
  NativeModules,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useState} from 'react';

const {ReactOneCustomMethod} = NativeModules;
const App = () => {
  // our custom method

  const [id, setId] = useState('Press the button to get The ID');

  const getId = () => {
    ReactOneCustomMethod.getPhoneID()
      .then((res: string) => {
        setId('ID: ' + res);
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.id}>{id}</Text>
      <Button title="Get Id" onPress={getId} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  id: {
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
