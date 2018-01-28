import { StyleSheet } from 'react-native';

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    sport: {
      zIndex: 3,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5ABDF',
    },
    training: {
      zIndex: 2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5BCCD',   
    },
    exercise: {
      zIndex: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F2ADBF', 
    },
    button: {
      padding: 15
    }
  });
  export default styles;
