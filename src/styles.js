import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'black',
  },
  cuts: {flex: 1, backgroundColor: '#0F0F0F', flexGrow: 1},

  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 15,
    fontSize: 20,
    color: 'white',
  },
  link: {
    textAlign: 'center',
    padding: 15,
    fontSize: 12,
    color: 'white',
  },
});
