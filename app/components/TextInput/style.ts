import { StyleSheet } from 'react-native';
import size from '../../utils/size';

export default StyleSheet.create({
  input: {
    width: size.width * 0.95,
    borderRadius: size.radius,
    backgroundColor: '#fff',
    padding: 5,
    fontSize: size.font,
    height: size.height * 0.7,
  },
});
