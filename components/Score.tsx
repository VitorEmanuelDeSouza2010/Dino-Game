import { useGame } from "@/hooks/gameHook";
import { StyleSheet, Text, View } from "react-native";

export default function Score() {
    const { score, setScore } = useGame();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{score}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 20,
        right: 20,
    },

    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff"
    },
});