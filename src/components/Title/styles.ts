import { theme } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        fontFamily: theme.fontFamily.bold,
        fontSize: 36,
        textAlign: "center",
        color: theme.colors.darkGreen,
    }
})