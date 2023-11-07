import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  
  const Incraese = ()=> {
    setCount(count + 1)
  }

  const Decrease = ()=> {
    setCount( count - 1)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click Here to increase a count!</Text>
      <Text style={styles.text}> Your Total Count is {count}</Text>
      <Button onPress={() => Incraese()} style={styles.button} title='Click me To Increase count' />
      <Button onPress={() => Decrease()} style={styles.button} title='Click me To Increase count' />
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dark',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingTop: 10,
    marginBottom: 10,
  },
  button: {
    color: 'red',
    backgroundColor: 'red'
  }
});

export default App