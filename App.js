import { StyleSheet, Text, View } from 'react-native';
import Index from './screens/Index';
import Signup from './screens/SignupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Index/> */}
      <Signup/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
