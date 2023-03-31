import { StyleSheet } from "react-native";
import color from "../../utils/color";
import size from "../../utils/size";

export default StyleSheet.create({
    root: {
        flexDirection: "row",
        padding: size.small,
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        marginVertical: size.small,
    },
    text: {
        paddingHorizontal: 2,
        color: color.background,
        fontWeight: "600",
    },
    blankInput: {
        minHeight: 27,
        width: 120,
        marginHorizontal: 2,
    }
})