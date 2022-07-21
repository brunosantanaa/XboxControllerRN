import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 75,
    backgroundColor: 'black',
    width: 150,
    height: 150,
  },
  container_hor: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

  },
  vert: {
    flex: 0.34,
    flexDirection: 'column',
  },
  hor: {
    flex: 0.33
  },
  bt: {
    flex: 0.33,
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});

export default styles;