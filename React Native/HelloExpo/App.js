import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Header from './components/header/header';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function App() {

  return (
    <>

    {/* Prove o suporte pra trabalhar com a área de segurança visivel do dispositivo móvel */}
    
    <SafeAreaProvider >

      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
    
      <Header />

      <Text style={styles.texto1}>Sou um Text</Text>
      
      <Pressable>
        <Text style={styles.texto2}>Sou um Pressable</Text>
      </Pressable>

      {/* <StatusBar style="auto" />  */}
      
    </View>
    </SafeAreaView>
  </SafeAreaProvider>
    
    </>
  );
} 

const styles = StyleSheet.create({ 
  safeArea : {
    flex: 1,
    backgroundColor: '#b8b6b6',
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },

  container : {
    flex: 1, //mesma coisa que o height: '100%'
    borderWidth: 3,
    borderStyle: 'solid',
    backgroundColor: '#ffffff',
    borderColor: 'red',
    borderStyle: 'dotted',
  },

  texto1 : {
    color: 'red',
    fontSize: 20
  },
  texto2 : {
    color: 'blue',
    fontSize: 20
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, //mesma coisa que o height: '100%'
//     backgroundColor: '#ccc',
//     borderWidth: 3,
//     borderStyle: 'solid',
//     borderColor: 'red'
//   },
// });
