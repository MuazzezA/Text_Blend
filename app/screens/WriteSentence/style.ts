import { StyleSheet } from "react-native/";
import size from "../../utils/size";

export default StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
    },
    textButton: { fontWeight: 'bold', fontSize: 20, marginHorizontal: 5 },
    input: {
        paddingHorizontal: 4,
        margin: 3,
        minHeight: 30,
        width: size.width * 0.9,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 5,
        padding: 2,
        flexDirection: 'row',
        borderRadius: size.radius,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
    }
});