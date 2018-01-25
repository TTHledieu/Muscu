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
    muscle: {
      flex: 3,
      backgroundColor: '#F5BCCD',      
      
    },
    exercise: {
      flex: 5,
      backgroundColor: '#F2ADBF',      
    }
  });
  export default styles;
