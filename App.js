import { StyleSheet, Text, View } from 'react-native';
import Index from './screens/Index';
import Signup from './screens/SignupScreen';
import ReqHospital from './screens/ReqHospital';
import SigninScreen from './screens/SigninScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Index/> */}
      {/* <Signup/>   */}
      <ReqHospital/> 
      {/* <SigninScreen/>  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
