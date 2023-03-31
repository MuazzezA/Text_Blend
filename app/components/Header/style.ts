import { StyleSheet } from 'react-native';
import color from '../../utils/color';
import size from '../../utils/size';
export default StyleSheet.create({
    root: {
        backgroundColor: color.purple,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },
    text: {
        color: color.background,
        fontSize: size.medium,
        textAlign: 'center',
        position: 'absolute',
    },
    button: {
        backgroundColor: color.purple,
        position: 'absolute',
        justifyContent: 'center',
        left: 10,
        width: 50,

    }
});