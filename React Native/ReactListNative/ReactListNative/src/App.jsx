import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles';
import { FormTask } from './components/formdata/FormTask';
import { Header } from './components/header/header';
import { TaskList } from './components/tasklist/TaskList';

export default function App() {
  return (
    <>
      
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>

        <View style={styles.container}>
          <Header />


          <FormTask />

          <TaskList />  

          

          <StatusBar style="auto" />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>

    </>
  );
}
