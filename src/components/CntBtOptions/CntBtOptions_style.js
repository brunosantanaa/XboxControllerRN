import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    flex: 0.33,
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  principal_container: {
    flex: 0.45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
  },
  j_start: {
    alignSelf: 'flex-start',
  },
  j_end: {
    justifyContent: 'flex-end',
  }
});
export default styles;