import { StatusBar, Text, View } from 'react-native';
import './global.css'
import { AppNavigator } from './src/navigators/app-navigator';

function App() {
  return (
    <View className='flex-1 bg-white'>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
        <AppNavigator />
    </View>
  );
}

export default App;
