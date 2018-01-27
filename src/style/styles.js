import { StyleSheet } from 'react-native';

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    sport: {
      flex: 2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5ABDF',
    },
    training: {
      flex: 3,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5BCCD',      
      
    },
    exercise: {
      flex: 5,
      backgroundColor: '#F2ADBF',      
    },
    button: {
      padding: 15
    }
  });
  export default styles;
