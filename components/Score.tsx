import { useGame } from "@/hooks/gameHook";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Score() {
    const { score, setScore } = useGame();

    useEffect(() => {
        const interval = setInterval(() => {
            setScore((oldState: any) => oldState + 1);
        }, 1000);

        return () => clearInterval(interval);
        
    }, []);

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