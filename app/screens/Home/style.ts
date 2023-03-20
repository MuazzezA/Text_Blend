import { StyleSheet } from "react-native";
import size from "../../utils/size";
import color from "../../utils/color";
export default StyleSheet.create({
    root: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    card: {
        width: size.width * 0.95,
        marginVertical: size.medium,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: color.primary,
    },
    button: {
        marginVertical: size.medium,
    }
});