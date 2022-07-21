import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0.33,
    borderRadius: 105,
    width: 210,
    height: 210,
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

  space: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
});

export default styles;