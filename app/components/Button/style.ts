import { StyleSheet } from 'react-native';
import color from '../../utils/color';
import size from '../../utils/size';
export default StyleSheet.create({
  button: {
    backgroundColor: color.primary,
    alignItems: 'center',
    padding: size.small,
    borderRadius: size.radius,
    width: 270,
    height: size.xlarge,
  },
  buttonText: {
    color: '#fff',
    fontSize: size.font,
    fontWeight: 'bold',
  },
  smallButton: {
    width: 120,
  },
});
