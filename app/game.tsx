import MovingBackground from "@/components/MovingBackground";
import Dino from "@/components/Dino";
import { StyleSheet, Image, View, TouchableOpacity, Pressable } from "react-native";
import { useGame } from "@/hooks/gameHook";
import Score from "@/components/Score";

export default function GameScreen() {
    const { jump } = useGame();

    return (
        <Pressable onPress={jump} style={styles.button}>
            <View style={styles.container} >
                <MovingBackground />
                <Dino />
                <Score />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: "100%",
    },

    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(247, 247, 247)",
        position: "relative",
    },

    image: {
        width: "100%",
        height: "100%",
    },
})